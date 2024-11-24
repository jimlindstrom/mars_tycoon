import './MiniMap.css';

function MiniMap({numWorldTilesWide, numWorldTilesTall, numVisibleTilesWide, numVisibleTilesTall, scrollTilesX, scrollTilesY}) {
  const worldAspectRatio = numWorldTilesWide / numWorldTilesTall;
  const visibleAspectRatio = numVisibleTilesWide / numVisibleTilesTall;

  const mapHeightPx = 80;
  const tilePx = mapHeightPx / numWorldTilesTall;
  const mapWidthPx  = numWorldTilesWide * tilePx;

  const visibleTopY = scrollTilesY * tilePx;
  const visibleTopX = scrollTilesX * tilePx;
  const visibleWidth = numVisibleTilesWide * tilePx;
  const visibleHeight = numVisibleTilesTall * tilePx;

  return (
    <div id="miniMap" style={{width: mapWidthPx, height: mapHeightPx}}>
      <div id="miniMapViewPort" style={{left: visibleTopX, top: visibleTopY, width: visibleWidth, height: visibleHeight}}>
      </div>
    </div>
  );
}

export { MiniMap };
