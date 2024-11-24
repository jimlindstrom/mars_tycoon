import React, { useLayoutEffect, useState } from 'react';
import './TileMatrix.css';

function TileMatrix({updateTileMatrixSize, tileMatrix}) {
  const [tileWidthPx,  setTileWidthPx]  = useState(64);
  const [tileHeightPx, settileHeightPx] = useState(64);
  const [numTilesWide, setNumTilesWide] = useState(1);
  const [numTilesTall, setNumTilesTall] = useState(1);

  useLayoutEffect(() => {
    function updateWindowSize() {
      var numTilesWide = Math.ceil(window.innerWidth / tileWidthPx);
      var numTilesTall = Math.ceil(window.innerHeight / tileHeightPx);
      updateTileMatrixSize(numTilesWide, numTilesTall);
    }
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return (
    <div className="tileMatrix">
      {tileMatrix.map((row) => {
        return (
          <div className="tileMatrixRow" style={{height: tileHeightPx}}>
            {row.map((tile) => {
              return (
                <div className="tileMatrixCell" style={{width: tileWidthPx, height: tileHeightPx, backgroundImage: `url(${tile.filename})`}}>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export { TileMatrix };
