import {  landerAddRoverDeploymentAction } from './Lander.js';
import { imageDefns } from "./ImageDefinitions.js";

const initialYear = 2200;
function initialGameState() {
  return {
    state: "loading",
    year: initialYear,
    colonyIsDead: false,
    resources: {
      food:   50,
      oxygen: 50,
      water:  50,

      energy: 55,
      methane: 0,
      ore:    25,
    },
    assets: {
      people: 15,
    },
    showBuildOptions: false,
    showEconModal: false
  }
}

function gameTransitionFromLoadingToLanding(setGameState) { /* not exported */
  setGameState((prev) => {
    return {
      ...prev,
      state: "landing"
    }
  });
}

function gameTransitionFromLandingToDeploying(setGameState, setSprites) { /* not exported */
  setGameState((prev) => {
    return {
      ...prev,
      state: "deploying"
    }
  });
  setSprites((prev) => {
    return prev.map((sprite) => {
      if (sprite.tileIdx === 24) {
        return landerAddRoverDeploymentAction(sprite);
      }
      else { return sprite; }  /* pass-thru for non-landers */
    });
  });
}

function gameTransitionFromDeployingToPlaying(setGameState) { /* not exported */
  setGameState((prevGameState) => {
    return {
      ...prevGameState,
      state: "playing"
    }
  });
}

function gameAllLandersLanded(sprites) { /* not exported */
  return sprites.every((sprite) => {
    return (
      sprite.tileIdx !== 24    /* non-landers: okay */
      || sprite.yOffset === 0  /* landers: okay if we're no longer floating them above tile */
    );
  });
}

function gameAllLanderRoversDeployed(sprites) { /* not exported */
  return sprites.every((sprite) => {
    return (
      !('goodAlerts' in sprite)       /* if it doesn't have the goodAlerts key -> great */
      || sprite.goodAlerts.length===0  /* or if it does, but it's an empty array -> great */
    );
  });
}

function gameDecideNextState(gameState, setGameState, sprites, setSprites) {
  if (gameState.state === "loading") {
    var elapsedSecs = (gameState.year - initialYear) / 4 * 20;
    if (elapsedSecs > 4.5) {
      gameTransitionFromLoadingToLanding(setGameState);
    }
  }
  else if (gameState.state === "landing") {
    if (gameAllLandersLanded(sprites)) {
      gameTransitionFromLandingToDeploying(setGameState, setSprites);
    }
  }
  else if (gameState.state === "deploying") {
    if (gameAllLanderRoversDeployed(sprites)) {
      gameTransitionFromDeployingToPlaying(setGameState);
    }
  }
}

function gameTitleOverlay(gameState) {
  if (gameState.state === "loading") {
    return (
      <div id="fullScreenOverlay">
        <h1>Welcome to Mars Tycoon!</h1>
      </div>
    );
  }
  else {
    return null;
  }
}

function gameSideBar(gameState, setGameState) {
  if (gameState.state === "loading") {
    return null;
  }
  else if (gameState.state === "landing") {
    return (
      <div id="sidebar">
        <h1>Mars Tycoon</h1>
        <div className="rowSpacer"></div>
        <div>You are the commander of a mission to Mars.</div>
        <br/>
        <div>Your landers are arriving.</div>
      </div>
    );
  }
  else if (gameState.state === "deploying") {
    return (
      <div id="sidebar">
        <h1>Mars Tycoon</h1>
        <div className="rowSpacer"></div>
        <div>Your landers have arrived.</div>
        <br />
        <div>Tap each lander to deploy its rover</div>
      </div>
    );
  }
  else {
    return (
      <div id="sidebar">
        <h1>Mars Tycoon</h1>
        <div className="rowSpacer"></div>
        <div className="row"><span className="label">Year</span><span className="value">{Math.floor(gameState.year)}</span></div>
        <div className="rowSpacer"></div>
        <div className="row"><span className="label">People</span><span className="value">{Math.floor(gameState.assets.people)}</span></div>
        <div className="rowSpacer"></div>
        <div className="row"><span className="label">Food</span><span className="value">{Math.floor(gameState.resources.food)}</span></div>
        <div className="row"><span className="label">Oxygen</span><span className="value">{Math.floor(gameState.resources.oxygen)}</span></div>
        <div className="row"><span className="label">Water</span><span className="value">{Math.floor(gameState.resources.water)}</span></div>
        <div className="rowSpacer"></div>
        <div className="row"><span className="label">Energy</span><span className="value">{Math.floor(gameState.resources.energy)}</span></div>
        <div className="row"><span className="label">Methane</span><span className="value">{Math.floor(gameState.resources.methane)}</span></div>
        <div className="row"><span className="label">Ore</span><span className="value">{Math.floor(gameState.resources.ore)}</span></div>
        <div className="rowSpacer"></div>
        <a href="#" onClick={() => { setGameState((prev) => { return { ...prev, showEconModal: true }; })}}>Colony&apos;s Economy</a>
      </div>
    );
  }
}

const buildOptions = [
  {
    heading: 'Housing',
    resource: 'housing',
    items: [
      { imageDefnIdx: 21 /* Housing Baracks */ },
      { imageDefnIdx: 27 /* Housing Dome */ },
    ]
  },
  {
    heading: 'Food',
    resource: 'food',
    items: [
      { imageDefnIdx: 10 /* Bio Reactor */ },
      { imageDefnIdx: 22 /* Farm Dome */ },
    ]
  },
  {
    heading: 'Energy',
    resource: 'energy',
    items: [
      { imageDefnIdx: 19 /* Solar Panel */ },
      { imageDefnIdx: 12 /* Wind Turbine */ },
      { imageDefnIdx: 20 /* Geo-Thermal Reactor */ },
      { imageDefnIdx: 25 /* Nuclear Reactor */ },
    ]
  },
  {
    heading: 'Water',
    resource: 'water',
    items: [
      { imageDefnIdx: 36 /* Regolith Oven */ },
      { imageDefnIdx: 37 /* Ice Mine */ },
    ]
  },
  {
    heading: 'Ore',
    resource: 'ore',
    items: [
      { imageDefnIdx: 35 /* Ore Mine */ },
    ]
  },
  {
    heading: 'Surface Exploration',
    resource: null,
    items: [
      { imageDefnIdx: 14 /* Drone Port */ },
      { imageDefnIdx: 32 /* Drone */ },
    ]
  },
  {
    heading: 'Re-Supply',
    resource: null,
    items: [
      { imageDefnIdx: 28 /* Space Port */ }, /* FIXME: this is a multi-tile background */
      { imageDefnIdx:  6 /* Rocket Fuel Plant */ },
      { imageDefnIdx: 23 /* Supply Rocket */ },
    ]
  },
]

function gameHideBuildScreen(setGameState) {
  setGameState((prevState) => {
    return {
      ...prevState,
      showBuildOptions: false,
      selectedBuildOption: null,
      previewedBuildOption: null,
    }
  });
}

function gamePreviewBuildOption(setGameState, buildGroupIdx, buildItemIdx) {
  setGameState((prevState) => {
    return {
      ...prevState,
      previewedBuildOption: {buildGroupIdx: buildGroupIdx, buildItemIdx: buildItemIdx}
    }
  });
}

function gameSelectBuildOption(gameState, setGameState, buildGroupIdx, buildItemIdx) {
  setGameState((prevState) => {
    return {
      ...prevState,
      showBuildOptions: null,
      previewedBuildOption: null,
      selectedBuildOption: {
        buildGroupIdx: buildGroupIdx,
        buildItemIdx: buildItemIdx,
        tileIdx: buildOptions[gameState.previewedBuildOption.buildGroupIdx].items[gameState.previewedBuildOption.buildItemIdx].imageDefnIdx
      },
    }
  });
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function gameBuildScreen(gameState, setGameState) {
  if (!gameState.showBuildOptions) {
    return null;
  }

  var previewPane = null;
  if (gameState.previewedBuildOption) {
    const curBuildOption = buildOptions[gameState.previewedBuildOption.buildGroupIdx].items[gameState.previewedBuildOption.buildItemIdx];
    const previewItem = imageDefns[curBuildOption.imageDefnIdx];
    previewPane = (
      <div className="buildOptionsPreview">
        <h2 className="itemName">{previewItem.name}</h2>

        <div className="previewCategory">Cost to Build</div>
        <div className="twoColGrid">
          {Object.keys(previewItem.cost).map((k) => {
            return ( 
              <div key={"row-cost-"+k} className="row">
                <div className="col1">{toTitleCase(k)}</div>
                <div className="col2">{previewItem.cost[k]}</div>
              </div>
            );
          })}
        </div>

        <div className="previewCategory">Annual Production</div>
        <div className="twoColGrid">
          {Object.keys(previewItem.produces).map((k) => {
            return ( 
              <div key={"row-produces-"+k} className="row">
                <div className="col1">{toTitleCase(k)}</div>
                <div className="col2">{previewItem.produces[k]}</div>
              </div>
            );
          })}
        </div>

        <div className="previewCategory">Annual Consumption</div>
        <div className="twoColGrid">
          {Object.keys(previewItem.consumes).map((k) => {
            return ( 
              <div key={"row-consumes-"+k} className="row">
                <div className="col1">{toTitleCase(k)}</div>
                <div className="col2">{previewItem.consumes[k]}</div>
              </div>
            );
          })}
        </div>

        <div className="previewCategory">Staffing</div>
        <div className="twoColGrid">
          {Object.keys(previewItem.requires).map((k) => {
            return ( 
              <div key={"row-requires-"+k} className="row">
                <div className="col1">{toTitleCase(k)}</div>
                <div className="col2">{previewItem.requires[k]}</div>
              </div>
            );
          })}
        </div>

        <button className="buyButton" onClick={() => {gameSelectBuildOption(gameState, setGameState, gameState.previewedBuildOption.buildGroupIdx, gameState.previewedBuildOption.buildItemIdx)}}>Build</button>
      </div>
    );
  }

  /* FIXME: This isn't as helpful as I thought it woudl be. need to think harder about why... */
  function buildGroupWarning(resource) {
    if (resource in gameState.netProduction && gameState.netProduction[resource] < 0) {
      var turnsLeft = gameState.resources[resource] / gameState.netProduction[resource];
      if (gameState.netProduction[resource] > 0) {
        return null; // resource is accumulating. that's good
      }
      else if (gameState.netProduction[resource] == 0) {
        if (gameState.resources[resource] >= 10) {
          return null; // resource is stable and 10+. that's good
        } 
        else if (gameState.resources[resource] >= 4) {
          return <span className="buildGroupYellowTag">More Needed</span>; // resource is stable and 4-9. that's a little iffy
        } 
        else {
          return <span className="buildGroupRedTag">More Needed</span>; // resource is stable and 4-9. that's a little iffy
        }
      }
      else if (gameState.netProduction[resource] < 0) {
        const turnsLeft = gameState.resources[resource] / -gameState.netProduction[resource];
        if (turnsLeft > 10) {
          return <span className="buildGroupYellowTag">More Needed</span>; // resource decresasing. but we have some time..
        } 
        else {
          return <span className="buildGroupRedTag">More Needed</span>; // resource is stable and 4-9. that's a little iffy
        } 
      }
    }
    else if (gameState.requiredAssets[resource] < 0) {
      if (resource in gameState.requiredAssets && gameState.requiredAssets[resource] < 0) {
        return <span className="buildGroupRedTag">More Needed</span>;
      }
      else if (gameState.requiredAssets[resource] < 2) {
        return <span className="buildGroupYellowTag">More Needed</span>;
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }

  return (
    <div className="buildOptions">
      <div className="buildOptionsMenuBar">
        <h2>What Would You Like to Build?</h2>
        <a href="#" className="buildOptionsClose" onClick={() => {gameHideBuildScreen(setGameState)}}>Close</a>
      </div>
      <div className="buildOptionsContents">
        <div className="buildOptionsList">
          {buildOptions.map((buildGroup, buildGroupIdx) => {
            return (
              <div key={"buildGroup-"+buildGroupIdx} className="buildGroup">
                <div className="buildGroupHeader">{buildGroup.heading} {buildGroupWarning(buildGroup.resource)}</div>
                {buildGroup.items.map((buildItem, buildItemIdx) => {
                  return (
                    <div key={"buildItem"+buildItemIdx} className="buildItem" onClick={() => {gamePreviewBuildOption(setGameState, buildGroupIdx, buildItemIdx)}}>
                      <div className="buildItemImg">
                        <img src={imageDefns[buildItem.imageDefnIdx].srcs[0]}></img>
                      </div>
                      <div className="buildItemDesc">
                        <b>{imageDefns[buildItem.imageDefnIdx].name}</b>
                        <br/>
                        {imageDefns[buildItem.imageDefnIdx].desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {previewPane}
      </div>
    </div>
  );
}

function gameHideEconModal(setGameState) {
  setGameState((prevState) => {
    return {
      ...prevState,
      showEconModal: false,
    }
  });
}

function gameEconModal(gameState, setGameState) {
  if (!gameState.showEconModal) {
    return null;
  }

  const modalContents = (
    (
      !(gameState.netProduction === undefined)
      && !(gameState.requiredAssets === undefined)
    )
    ? (
      <div className="econModalContents">
        <div className="previewCategory">Production (Each Turn)</div>
        <div className="twoColGrid">
          {Object.keys(gameState.netProduction).map((k) => {
            const rgbClass = (
              (gameState.netProduction[k] < 0)
              ? "rgbRed"
              : (
                (gameState.netProduction[k] > 10)
                ? "rgbGreen"
                : "rgbYellow"
              )
            );
            return ( 
              <div key={"row-cost-"+k} className="row">
                <div className="col1">{toTitleCase(k)}</div>
                <div className={"col2 "+rgbClass}>{Math.round(gameState.netProduction[k])}</div>
              </div>
            );
          })}
        </div>
        <div className="previewCategory">Current Requirements</div>
        <div className="twoColGrid">
          {Object.keys(gameState.requiredAssets).map((k) => {
            const rgbClass = (
              (gameState.requiredAssets[k] < 0)
              ? "rgbRed"
              : (
                (gameState.requiredAssets[k] > 10)
                ? "rgbGreen"
                : "rgbYellow"
              )
            );
            return ( 
              <div key={"row-cost-"+k} className="row">
                <div className="col1">{toTitleCase(k)}</div>
                <div className={"col2 "+rgbClass}>{Math.round(gameState.requiredAssets[k])}</div>
              </div>
            );
          })}
        </div>
      </div>
    )
    : (
      <div className="econModalContents">
        The economy has not run yet. Check back later.
      </div>
    )
  );

  return (
    <div className="econModal">
      <div className="econModalMenuBar">
        <h2>Colony&#39;s Economy</h2>
        <a href="#" className="econModalClose" onClick={() => {gameHideEconModal(setGameState)}}>Close</a>
      </div>
      {modalContents}
    </div>
  );
}

function gameOverModal(gameState) {
  if (!gameState.colonyIsDead) {
    return null;
  }

  const modalContents = (
    <div className="gameOverModalContents">
      <div>You ran out of resources. The colony did not survive...</div>
      <div style={{marginTop: "32px", width: "100%", textAlign: "center"}}><img src={process.env.PUBLIC_URL+"/game_over.jpg"} /></div>
    </div>
  );

  return (
    <div className="gameOverModal">
      <div className="gameOverModalMenuBar">
        <h2>Game Over</h2>
        <a href="#" className="gameOverModalClose" onClick={() => {}}>Close</a>
      </div>
      {modalContents}
    </div>
  );
}

function gameEnterMoveMode(setGameState, spriteIdx) {
  setGameState((prevState) => {
    return {
      ...prevState,
      chooseMoveLocation: true,
      spriteMoveIdx: spriteIdx,
    }
  });
}


export { initialGameState, gameDecideNextState, gameTitleOverlay, gameSideBar, gameEnterMoveMode, gameBuildScreen, gameEconModal, gameOverModal };
