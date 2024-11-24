import { useState, useEffect, useRef } from 'react';
import { unzipPairs } from './FunctionalHelpers.js';
import { weightedRandom } from './StatsHelpers.js';
import { imageDefns } from "./ImageDefinitions.js";
import { SpriteToolTip } from "./SpriteToolTip.js";
import { pointInPolygon } from "./MathHelpers.js";

function drawGrayOverlay(context, polyPoints, gameTick) {
  context.beginPath();
  context.moveTo(polyPoints[0][0], polyPoints[0][1]);
  context.lineTo(polyPoints[1][0], polyPoints[1][1]);
  context.lineTo(polyPoints[2][0], polyPoints[2][1]);
  context.lineTo(polyPoints[3][0], polyPoints[3][1]);
  context.lineTo(polyPoints[0][0], polyPoints[0][1]);
  context.fillStyle = "rgba(0, 0, 0, 0.25)";
  context.fill();
}

function drawCyanHighlight(context, polyPoints, gameTick) {
  context.beginPath();
  context.moveTo(polyPoints[0][0], polyPoints[0][1]);
  context.lineTo(polyPoints[1][0], polyPoints[1][1]);
  context.lineTo(polyPoints[2][0], polyPoints[2][1]);
  context.lineTo(polyPoints[3][0], polyPoints[3][1]);
  context.lineTo(polyPoints[0][0], polyPoints[0][1]);
  context.strokeStyle = [
    "#00FFFF", "#00FFFF",
    "#00d8d8", "#00d8d8"
  ][gameTick % 4];
  context.lineWidth = 2;
  context.setLineDash([]);
  context.stroke();
}

function drawDottedCyanHighlight(context, polyPoints, gameTick) {
  context.beginPath();
  context.moveTo(polyPoints[0][0], polyPoints[0][1]);
  context.lineTo(polyPoints[1][0], polyPoints[1][1]);
  context.lineTo(polyPoints[2][0], polyPoints[2][1]);
  context.lineTo(polyPoints[3][0], polyPoints[3][1]);
  context.lineTo(polyPoints[0][0], polyPoints[0][1]);
  context.strokeStyle = [
    "#00FFFF", "#00FFFF",
    "#00d8d8", "#00d8d8"
  ][gameTick % 4];
  context.lineWidth = 2;
  context.setLineDash([5, 8]);
  context.stroke();
}

function drawFilledGreenHighlight(context, polyPoints, gameTick) {
  context.beginPath();
  context.moveTo(polyPoints[0][0], polyPoints[0][1]);
  context.lineTo(polyPoints[1][0], polyPoints[1][1]);
  context.lineTo(polyPoints[2][0], polyPoints[2][1]);
  context.lineTo(polyPoints[3][0], polyPoints[3][1]);
  context.lineTo(polyPoints[0][0], polyPoints[0][1]);
  context.strokeStyle = [
    "rgba(0, 255, 0, 0.25)",
    "rgba(0, 255, 0, 0.25)",
    "rgba(0, 255, 0, 0.15)",
    "rgba(0, 255, 0, 0.15)",
  ][gameTick % 4];
  context.lineWidth = 2;
  context.setLineDash([]);
  context.stroke();
  context.fillStyle = [
    "rgba(0, 255, 0, 0.2)",
    "rgba(0, 255, 0, 0.2)",
    "rgba(0, 255, 0, 0.1)",
    "rgba(0, 255, 0, 0.1)",
  ][gameTick % 4];
  context.fill();
}

function drawFilledRedHighlight(context, polyPoints, gameTick) {
  context.beginPath();
  context.moveTo(polyPoints[0][0], polyPoints[0][1]);
  context.lineTo(polyPoints[1][0], polyPoints[1][1]);
  context.lineTo(polyPoints[2][0], polyPoints[2][1]);
  context.lineTo(polyPoints[3][0], polyPoints[3][1]);
  context.lineTo(polyPoints[0][0], polyPoints[0][1]);
  context.strokeStyle = [
    "rgba(255, 0, 0, 0.28)",
    "rgba(255, 0, 0, 0.28)",
    "rgba(255, 0, 0, 0.18)",
    "rgba(255, 0, 0, 0.18)",
  ][gameTick % 4];
  context.lineWidth = 2;
  context.setLineDash([]);
  context.stroke();
  context.fillStyle = [
    "rgba(255, 0, 0, 0.25)",
    "rgba(255, 0, 0, 0.25)",
    "rgba(255, 0, 0, 0.14)",
    "rgba(255, 0, 0, 0.14)",
  ][gameTick % 4];
  context.fill();
}

function preLoadImages(setImages, setIsLoading) {
  const [curImages, imgPromises] = unzipPairs(
    imageDefns.map((defn) => {
      const [frames, framePromises] = unzipPairs(
        defn.srcs.map((src) => {
          const img = new Image();
          const promise = new Promise(function (resolve, reject) {
            img.src = src;
            img.onload = () => {
              resolve();
            }
            img.onerror = reject;
          });
          return [img, promise];
        })
      );

      const image = {
        frames: frames,
        size: defn.size,
        transitions: defn.transitions,
        name: defn.name,
        desc: defn.desc
      };
      const imagePromise = Promise.all(framePromises);

      return [image, imagePromise];
    })
  );
  setImages(curImages);
  Promise.all(imgPromises)
         .then((values) => {
    setIsLoading(false); 
  });
}

function handleArrowUp(setTopLeftTileX, setTopLeftTileY) { /* replace with something touch-friendly */
  setTopLeftTileX((prev) => prev-1);
  setTopLeftTileY((prev) => prev-1);
}

function handleArrowDown(setTopLeftTileX, setTopLeftTileY) { /* replace with something touch-friendly */
  setTopLeftTileX((prev) => prev+1);
  setTopLeftTileY((prev) => prev+1);
}

function handleArrowLeft(setTopLeftTileX, setTopLeftTileY) { /* replace with something touch-friendly */
  setTopLeftTileY((prev) => prev+1);
  setTopLeftTileX((prev) => prev-1);
}

function handleArrowRight(setTopLeftTileX, setTopLeftTileY) { /* replace with something touch-friendly */
  setTopLeftTileX((prev) => prev+1);
  setTopLeftTileY((prev) => prev-1);
}

function arePointsAdjacent(u1, v1, u2, v2) {
  return (
    ( (u1 == u2-1) && (v1 == v2-1)) ||
    ( (u1 == u2-1) && (v1 == v2  )) ||
    ( (u1 == u2-1) && (v1 == v2+1)) ||
    ( (u1 == u2  ) && (v1 == v2-1)) ||
    ( (u1 == u2  ) && (v1 == v2+1)) ||
    ( (u1 == u2+1) && (v1 == v2-1)) ||
    ( (u1 == u2+1) && (v1 == v2  )) ||
    ( (u1 == u2+1) && (v1 == v2+1))
  );
}

function bgTilePolygon(x, y, tile_width_px, tile_height_px) {
  return [
    [x + 0.5*tile_width_px, y                     ],
    [x + 1.0*tile_width_px, y + 1.0*tile_height_px],
    [x + 0.5*tile_width_px, y + 2.0*tile_height_px],
    [x                    , y + 1.0*tile_height_px]
  ];
}

function sprite1x1Polygon(x, y, width, height) {
  return [
    [x + 0.5*width, y             ],
    [x +     width, y + 0.5*height],
    [x + 0.5*width, y +     height],
    [x            , y + 0.5*height]
  ];
}

function sprite2x2Polygon(x, y, width, height) {
  return [
    [x + 0.5*width, y - height],
    [x + 1.5*width, y         ],
    [x + 0.5*width, y + height],
    [x - 0.5*width, y         ]
  ];
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Canvas
////////////////////////////////////////////////////////////////////////////////////////////////////

function Canvas({
    gameTick,
    worldTiles,
    numWorldTilesWide, numWorldTilesTall,
    topLeftTileX, topLeftTileY,
    setTopLeftTileX, setTopLeftTileY,
    sprites, updateSpriteStates,
    lastClick, setLastClick, handleClick,
    gameState,
    handleTooltipPromptClick,
    handleTooltipActionClick,
    handleDoneBuilding,
    handleDoneMoving,
    canAffordToBuild,
    subtractBuildCosts
  }) {
  const canvasRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [tooltipElem, setTooltipElem] = useState(null);
  const [buildTargets, setBuildTargets] = useState([]);
  const [moveTargets, setMoveTargets] = useState([]);

  /* pre-load the images */
  useEffect(() => {
    preLoadImages(setImages, setIsLoading);
  }, []);

  /* if anything changes, re-run this to re-render */
  useEffect(() => {
    // when loading, we don't reliably have images, so just wait...
    if (isLoading) { return; } 

    // figure out if there's a selected sprite
    var selectedSpriteIdx = -1;
    for (var si=0; si<sprites.length; si++) {
      if (sprites[si].isSelected) {
        selectedSpriteIdx = si;
        break;
      }
    }

    // keep track of whether we've handled a click
    var unhandledClick = Boolean(lastClick);

    // if there was a click, and if we're in build mode, see if the user clicked on any of the build targets
    if (unhandledClick && buildTargets) {
      for (var i=0; i<buildTargets.length; i++) {
        if (pointInPolygon(buildTargets[i].polyPoints, lastClick)) {
          if (canAffordToBuild(gameState.selectedBuildOption.tileIdx)) {
            const newSpriteIdx = sprites.length;
            updateSpriteStates([{
              spriteIdx: newSpriteIdx,
              tileIdx: gameState.selectedBuildOption.tileIdx,
              state: 0,
              u: buildTargets[i].u, v: buildTargets[i].v,
              isSelected: false
            }]);
            handleDoneBuilding();
            subtractBuildCosts(gameState.selectedBuildOption.tileIdx);
          }

          // mark the click as handled
          unhandledClick = false;
          break;
        }
      }
    }

    // if there was a click, and if we're in move mode, see if the user clicked on any of the move targets
    if (unhandledClick && moveTargets) {
      for (var i=0; i<moveTargets.length; i++) {
        if (pointInPolygon(moveTargets[i].polyPoints, lastClick)) {
          const newTileIdx = (
            (sprites[selectedSpriteIdx].v != moveTargets[i].v)
            ? 4
            : 5
          )
          updateSpriteStates([{
            spriteIdx: selectedSpriteIdx,
            tileIdx: newTileIdx,
            u: moveTargets[i].u, v: moveTargets[i].v,
            isSelected: false
          }]);
          handleDoneMoving();

          // mark the click as handled
          unhandledClick = false;
          break;
        }
      }
    }

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    const tile_width_px  = 92;
    const tile_height_px = 48 * 0.5;
    const num_tiles_wide = Math.ceil(canvas.width  / tile_width_px ) + 1;
    const num_tiles_high = Math.ceil(canvas.height / tile_height_px) + 1;

    var sx = topLeftTileX;
    var sy = topLeftTileY;

    // do painter's algorithm, starting with top (aka back) and working down
    var spriteUpdates = [];
    var tooltipXy = null;
    var tooltipItem = null;
    var newBuildTargets = [];
    var newMoveTargets = [];
    for (var ty=0; ty<num_tiles_high; ty++) {
      const is_odd_row = ty % 2;
      const cy = (ty - 1) * tile_height_px;
      const cx_shift = (
        (is_odd_row == 1)
        ? tile_width_px/2
        : 0
      ) - tile_width_px/2;
      for (var tx=0; tx<num_tiles_wide; tx++) {
        const u = sx + tx;
        const v = sy - tx;
        if ((u >= 0) && (u < numWorldTilesWide) && (v >= 0) && (v < numWorldTilesTall)) {
          const cx = cx_shift + (tx * tile_width_px);
          const tileIdx = worldTiles[v][u].tileIdx;
          const tileState = worldTiles[v][u].state;

          // draw background tile
          context.drawImage(images[tileIdx].frames[tileState], cx, cy);

          /* if gameState.selectedBuildOption is set */
          if (selectedSpriteIdx >= 0 && gameState.selectedBuildOption) {
            /* figure out if (u, v) (which could be 1x1 or 2x2) is adjacent to the selected tile */
            if (arePointsAdjacent(u,v, sprites[selectedSpriteIdx].u,sprites[selectedSpriteIdx].v)) {
              /* and if so, highlight the cell as a possible build target */
              const polyPoints = bgTilePolygon(cx, cy, tile_width_px, tile_height_px);
              drawDottedCyanHighlight(context, polyPoints, gameTick);
              /* and register it so that if we click, we can match the click position against these tiles */
              newBuildTargets.push({u: u, v: v, polyPoints: polyPoints});
            }
          }

          if (selectedSpriteIdx >= 0 && gameState.chooseMoveLocation) {
            /* figure out if (u, v) (which could be 1x1 or 2x2) is adjacent to the selected tile */
            if (arePointsAdjacent(u,v, sprites[selectedSpriteIdx].u,sprites[selectedSpriteIdx].v)) {
              /* and if so, highlight the cell as a possible build target */
              const polyPoints = bgTilePolygon(cx, cy, tile_width_px, tile_height_px);
              drawDottedCyanHighlight(context, polyPoints, gameTick);
              /* and register it so that if we click, we can match the click position against these tiles */
              newMoveTargets.push({u: u, v: v, polyPoints: polyPoints});
            }
          }

          for (var si=0; si<sprites.length; si++) {
            if (sprites[si].u == u && sprites[si].v == v) {
              const polyPoints = (
                (images[sprites[si].tileIdx].size == '1x1')
                ? sprite1x1Polygon(cx, cy, images[tileIdx].frames[tileState].width, images[tileIdx].frames[tileState].height)
                : (
                  (images[sprites[si].tileIdx].size == '2x2')
                  ? sprite2x2Polygon(cx, cy, images[tileIdx].frames[tileState].width, images[tileIdx].frames[tileState].height)
                  : null
                )
              );
              drawGrayOverlay(context, polyPoints, gameTick);

              if (sprites[si].goodAlerts) {
                drawFilledGreenHighlight(context, polyPoints, gameTick);
              }
              else if (sprites[si].badAlerts) {
                drawFilledRedHighlight(context, polyPoints, gameTick);
              }
              if (sprites[si].isSelected) {
                drawCyanHighlight(context, polyPoints, gameTick);
                tooltipXy = [polyPoints[1][0] + 16, polyPoints[1][1]];
                if (polyPoints[1][1] > canvas.height/2) {
                  tooltipXy[1] -= 100;
                }
                if (polyPoints[1][0] > canvas.width/2) {
                  tooltipXy[0] = polyPoints[3][0] - 250 - 8;
                }
                tooltipItem = sprites[si];
              }

              const curSpriteState = sprites[si].state;
              const curSpriteFrame = images[sprites[si].tileIdx].frames[curSpriteState];
              const cx_offset = ((curSpriteFrame.width - 92) / 2);
              const cy_offset = Math.max(0, (curSpriteFrame.height - 48)) + (sprites[si].yOffset || 0);
              context.drawImage(curSpriteFrame, cx - cx_offset, cy - cy_offset);
              const nextStateWeights = images[sprites[si].tileIdx].transitions[curSpriteState].map((item) => item.weight);
              const nextStates       = images[sprites[si].tileIdx].transitions[curSpriteState].map((item) => item.nextState);
              const nextState = weightedRandom(nextStates, nextStateWeights);
              const clickedInside = lastClick && pointInPolygon(polyPoints, lastClick);
              if (clickedInside) { unhandledClick = false; }
              const isSelected = (
                lastClick
                ? clickedInside
                : sprites[si].isSelected
              );
              spriteUpdates.push({spriteIdx: si, state: nextState, isSelected: isSelected});
            }
          }
        }
      }

      if (is_odd_row) {
        sy += 1;
      }
      else {
        sx += 1;
      }
    }
    setBuildTargets(newBuildTargets);
    setMoveTargets(newMoveTargets);

    // if some sprite is selected, draw the tooltip
    if (tooltipXy) {
      const tooltipElem = SpriteToolTip(images, tooltipXy, tooltipItem, handleTooltipActionClick, handleTooltipPromptClick);
      setTooltipElem(tooltipElem);
    }
    else {
      setTooltipElem(null);
    }

    // if any sprites changed state, mark them for updating
    if (spriteUpdates.length > 0) {
      updateSpriteStates(spriteUpdates);
    }

    // if this is a flail click, disable selected/previewed build options
    if (unhandledClick && buildTargets) {
      handleDoneBuilding();
      handleDoneMoving();
    }

    // we've processed the last click. now set it to null
    if (lastClick) {
      setLastClick(null);
    }
  }, [isLoading, gameTick, worldTiles, topLeftTileX, topLeftTileY])

  /* FIXME: replace this with something more mobile/tablet friendly */
  useEffect(() => {
    function keyDownHandler(e) {
      if (e.key === "ArrowUp"   ) { e.preventDefault(); handleArrowUp(setTopLeftTileX, setTopLeftTileY);    }
      if (e.key === "ArrowDown" ) { e.preventDefault(); handleArrowDown(setTopLeftTileX, setTopLeftTileY);  }
      if (e.key === "ArrowLeft" ) { e.preventDefault(); handleArrowLeft(setTopLeftTileX, setTopLeftTileY);  }
      if (e.key === "ArrowRight") { e.preventDefault(); handleArrowRight(setTopLeftTileX, setTopLeftTileY); }
    }
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div id="isoMapContainer">
      <canvas ref={canvasRef} id="isoMap" onClick={handleClick} />
      {tooltipElem}
    </div>
  );
}

export { Canvas };
