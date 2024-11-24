import React, { useLayoutEffect, useEffect, useState } from 'react';
import './App.css';
import { createWorldTiles } from './WorldTiles.js';
import { Canvas } from './Canvas.js';
import { animateDustStorm } from './DustStorm.js';
import { animateLander, handleLanderAction } from './Lander.js';
import { initialGameState, gameDecideNextState, gameTitleOverlay, gameSideBar, gameEnterMoveMode, gameBuildScreen, gameEconModal, gameOverModal } from './Game.js';
import { imageDefns, assetDefns } from "./ImageDefinitions.js";
var seedrandom = require('seedrandom');

////////////////////////////////////////////////////////////////////////////////////////////////////
// App
////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  var rng = seedrandom('123');

  /* these are used to display the currently visible portion of the tiles on screen */
  const [gameTick, setGameTick] = useState(0); // dummy variable used to invalidate the canvas when the window size changes
  const numWorldTilesWide = 150;
  const numWorldTilesTall = 100;
  const [topLeftTileX, setTopLeftTileX] = useState(50);
  const [topLeftTileY, setTopLeftTileY] = useState(53);
  const worldTiles = createWorldTiles(rng, 3, numWorldTilesWide, numWorldTilesTall);
  const [sprites, setSprites] = useState([
    { tileIdx: 24, state: 0, u: 63, v: 51, isSelected: false, yOffset: 460 }, /* lander */
    { tileIdx: 24, state: 0, u: 61, v: 59, isSelected: false, yOffset: 410 }, /* lander */
    { tileIdx: 24, state: 0, u: 59, v: 53, isSelected: false, yOffset: 440 }, /* lander */
    { tileIdx: 38, state: 0, u: 55, v: 53, isSelected: false }, /* dust storm */
    { tileIdx: 38, state: 0, u: 35, v: 65, isSelected: false }, /* dust storm */
    { tileIdx: 38, state: 0, u: 65, v: 35, isSelected: false }, /* dust storm */
  ]);
  const [lastClick, setLastClick] = useState(null);
  const [gameState, setGameState] = useState(initialGameState());

  // this watches for resizes and forces a re-render
  useLayoutEffect(() => {
    function updateWindowSize() {
      setGameTick((prevVal) => { return prevVal+1; }); // FIXME: this isn't the best way to force a re-draw
    }
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // game timer. 4 Hz
  const gameTickMsec = 250;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setGameTick((prevGameTick) => { return prevGameTick+1; });
    }, gameTickMsec);
    return () => clearInterval(intervalId); //This is important
  }, [])

  // upon updates to game tick, update game state's year
  const ticksPerYear = 30;
  useEffect(() => {
    setGameState((prevGameState) => {
      return {
        ...prevGameState,
        year: prevGameState.year + (1.0/ticksPerYear), // increment time
      };
    });
  }, [gameTick])

  // animate sprites
  useEffect(() => {
    setSprites((prevSprites) => {
      return prevSprites.map((prevSprite) => {
        if (prevSprite.tileIdx === 24) { // landers
          return animateLander(gameState.state, prevSprite);
        }
        else if (prevSprite.tileIdx === 38) { // dust storm
          return animateDustStorm(prevSprite);
        }
        else {
          return prevSprite;
        }
      });
    });
  }, [gameTick])

  // run the economy
  useEffect(() => {
    if (gameState.colonyIsDead ) { return; } /* don't run economy any more... */
    if (gameState.state === "loading" ) { return; } /* don't run economy yet... */
    if (gameState.state === "landing" ) { return; } /* don't run economy yet... */
    if (gameTick % ticksPerYear !== 0) { return; } /* only run the economy once a year */

    var netProduction = {};
    var requiredAssets = {};

    // initialize
    Object.keys(gameState.resources).forEach((key) => { netProduction[key] = 0; });
    Object.keys(gameState.assets).forEach((key) => { requiredAssets[key] = 0; });

    // calculate production and requirements for each sprite
    sprites.forEach((sprite) => {
      const curImageDefn = imageDefns[sprite.tileIdx];
      if ((sprite.tileIdx === 21) || (sprite.tileIdx === 27)) {
        if (!('housing' in requiredAssets)) {
          requiredAssets['housing'] = 0;
        }
        requiredAssets['housing'] += 1;
      }
      for (const [key, value] of Object.entries(curImageDefn.produces)) {
        if (!(key in netProduction)) {
          netProduction[key] = 0;
        }
        netProduction[key] += value;
      }
      for (const [key, value] of Object.entries(curImageDefn.consumes)) {
        if (!(key in netProduction)) {
          netProduction[key] = 0;
        }
        netProduction[key] -= value;
      }
      for (const [key, value] of Object.entries(curImageDefn.requires)) {
        if (!(key in requiredAssets)) {
          requiredAssets[key] = 0;
        }
        requiredAssets[key] -= value;
      }
    });

    // calculate production and requirements for population
    const peopleDefn = assetDefns[0];
    requiredAssets['people'] += gameState.assets.people
    for (const [key, value] of Object.entries(peopleDefn.produces)) {
      if (!(key in netProduction)) {
        netProduction[key] = 0;
      }
      netProduction[key] += value * gameState.assets.people;
    }
    for (const [key, value] of Object.entries(peopleDefn.consumes)) {
      if (!(key in netProduction)) {
        netProduction[key] = 0;
      }
      netProduction[key] -= value * gameState.assets.people;
    }
    for (const [key, value] of Object.entries(peopleDefn.requires)) {
      if (!(key in requiredAssets)) {
        requiredAssets[key] = 0;
      }
      requiredAssets[key] -= value * gameState.assets.people;
    }

    // figure out if all the requirements are met
    var requirementsMet = true;
    for (const [key, value] of Object.entries(requiredAssets)) {
      if (value < 0) {
        requirementsMet = false;
      }
    }
    // FIXME: we need to alert the user to start building in this scenario

    // produce! (subject to requirementst being met)
    setGameState((prevGameState) => { 
      var newAssets = Object.assign({}, prevGameState.assets);
      var newResources = Object.assign({}, prevGameState.resources);
      for (const [key, value] of Object.entries(netProduction)) {
        if (key in newAssets) {
          if (requirementsMet || value < 0) {
            newAssets[key] += value;
          }
        }
        else if (key in newResources) {
          if (requirementsMet || value < 0) {
            newResources[key] += value;
          }
        }
      }

      var colonyIsDead = false;
      for (const [key, value] of Object.entries(newResources)) {
        if (value < 0) {
          colonyIsDead = true
        }
      }

      // cache the results, in case someone loads the econ popup
      return {
        ...prevGameState,
        colonyIsDead: colonyIsDead,
        assets: newAssets,
        resources: newResources,
        netProduction: netProduction,
        requiredAssets: requiredAssets,
      };
    });
  }, [gameTick])

  // decide next game state
  useEffect(() => {
    gameDecideNextState(gameState, setGameState, sprites, setSprites);
  }, [gameTick])

  function updateSpriteStates(updates) {
    setSprites((prevSprites) => {
      for (var i=0; i<updates.length; i++) {
        // if this update is requesting that a NEW sprite exist, then make it
        while (updates[i].spriteIdx >= prevSprites.length) {
          prevSprites.push({});
        }
        // now find the relevant sprite and update any requested keys
        for (var k in updates[i]) {
          if (k === "spriteIdx") {
            // ignore this k,v
          }
          else {
            prevSprites[updates[i].spriteIdx][k] = updates[i][k];
          }
        }
      }
      return prevSprites;
    });
  }

  function handleClick(e) {
    // the canvas decides what to do with this click
    setLastClick([e.clientX, e.clientY]);
  }

  function getSpriteIdx(curSprite) {
    for (var si=0; si<sprites.length; si++) {
      if (
        (sprites[si].u === curSprite.u)
        && (sprites[si].v === curSprite.v)
        && (sprites[si].tileIdx === curSprite.tileIdx)
      ) {
        return si;
      }
    }
    return -1;
  }

  function handleTooltipPromptClick(curSprite, promptKey, promptIdx, actionIdx) {
    const spriteIdx = getSpriteIdx(curSprite);
    if (spriteIdx < 0) {
      console.log('handleTooltipPromptClick(): could not find sprite index:', curSprite);
      return;
    } 

    const curAction = curSprite[promptKey][promptIdx].actions[actionIdx];

    if (curSprite.tileIdx === 24) { /* lander */
      handleLanderAction(setSprites, curSprite, spriteIdx, promptKey, promptIdx, actionIdx, curAction);
    }
    else {
      console.log('handleTooltipPromptClick(): unknown sprite:', curSprite);
    }
  }

  function handleTooltipActionClick(curSprite, action) {
    const spriteIdx = getSpriteIdx(curSprite);
    if (spriteIdx < 0) {
      console.log('handleTooltipPromptClick(): could not find sprite index:', curSprite);
      return;
    } 

    // FIXME: these should be in Game?
    if (curSprite.tileIdx === 4 || curSprite.tileIdx === 5) { /* rover */ // FIXME: these should be different states of the same sprite
      if (action === "move") {
        gameEnterMoveMode(setGameState, spriteIdx);
      }
      else if (action === "build") {
        // FIXME: hide the tooltip somehow
        setGameState((prevState) => { 
          return {
            ...prevState,
            showBuildOptions: true
          }
        });
      }
      else {
        console.log('handleTooltipActionClick() - unknown action:', action);
      }
    }
    else {
      console.log('handleTooltipActionClick() - unknown sprite:', curSprite);
    }
  }

  function handleDoneBuilding() {
    setGameState((prevState) => {
      return {
        ...prevState,
        showBuildOptions: false,
        selectedBuildOption: null,
        previewedBuildOption: null,
      }
    });
  }

  function handleDoneMoving() {
    setGameState((prevState) => {
      return {
        ...prevState,
        chooseMoveLocation: false,
        spriteMoveIdx: null,
      }
    });
  }

  function canAffordToBuild(tileIdx) {
    var canAfford = true;
    const imageDefn = imageDefns[tileIdx];
    for (const [costKey, costValue] of Object.entries(imageDefn.cost)) {
      if (costKey in gameState.resources) {
        if (costValue > gameState.resources[costKey]) {
          canAfford = false;
        }
      }
      else {
        console.log('subtractBuildCosts() - item ', tileIdx, ' has a ', costKey, ' cost of ', costValue, ', but that cost key is not in', gameState.resources);
      }
    }
    return canAfford;
  }

  function subtractBuildCosts(tileIdx) {
    setGameState((prevState) => {
      var newResources = Object.assign({}, prevState.resources);
      const imageDefn = imageDefns[tileIdx];
      for (const [costKey, costValue] of Object.entries(imageDefn.cost)) {
        if (costKey in newResources) {
          newResources[costKey] -= costValue;
        }
        else {
          console.log('subtractBuildCosts() - item ', tileIdx, ' has a ', costKey, ' cost of ', costValue, ', but that cost key is not in', gameState.resources);
        }
      }
      return {
        ...prevState,
        resources: newResources
      }
    });
  }

  const gameCanvas = (
    <Canvas
      gameTick={gameTick}
      worldTiles={worldTiles}
      numWorldTilesWide={numWorldTilesWide}
      numWorldTilesTall={numWorldTilesTall}
      topLeftTileX={topLeftTileX}
      topLeftTileY={topLeftTileY}
      setTopLeftTileX={setTopLeftTileX}
      setTopLeftTileY={setTopLeftTileY}
      sprites={sprites}
      updateSpriteStates={updateSpriteStates}
      lastClick={lastClick}
      setLastClick={setLastClick}
      handleClick={handleClick}
      gameState={gameState}
      handleTooltipPromptClick={handleTooltipPromptClick}
      handleTooltipActionClick={handleTooltipActionClick}
      handleDoneBuilding={handleDoneBuilding}
      handleDoneMoving={handleDoneMoving}
      canAffordToBuild={canAffordToBuild}
      subtractBuildCosts={subtractBuildCosts}
      />
  );

  return (
    <div className="App">
      {gameCanvas}
      {gameTitleOverlay(gameState)}
      {gameSideBar(gameState, setGameState)}
      {gameBuildScreen(gameState, setGameState)}
      {gameEconModal(gameState, setGameState)}
      {gameOverModal(gameState)}
    </div>
  );
}

export default App;
