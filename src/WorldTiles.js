import { weightedSeededRandom } from './StatsHelpers.js';
import { arraySum } from './FunctionalHelpers.js';

function createWorldTiles(rng, maxTileIdx, numTilesWide, numTilesTall) {
  const numCenters = 7;
  var centers = [];
  for (var i=0; i<numCenters; i++) {
    centers.push({
      x: Math.floor(rng() * numTilesWide),
      y: Math.floor(rng() * numTilesWide),
      tileIdx: i % (maxTileIdx+1)
    });
  }

  var tileMatrix = [];
  for (var i=0; i<numTilesTall; i++) {
    var tileMatrixRow = [];
    for (var j=0; j<numTilesWide; j++) {
      var weights = [];
      for (var k=0; k<numCenters; k++) {
        const dx = (j - centers[k].x)
        const dy = (i - centers[k].y)
        const dist = Math.sqrt(dx*dx + dy*dy);
        weights.push(1.0 / dist);
      }
      const sumWeights = arraySum(weights);
      weights = weights.map((w) => w / sumWeights);

      var tileIdxs = centers.map((ctr) => ctr.tileIdx);
      var tileIdx = weightedSeededRandom(rng, tileIdxs, weights);

      /* FIXME: this is hard-coding a rocket landing pad at a specific spot */
      /*
      if (i == 50 && j == 54) { tileIdx = 28; }
      if (i == 51 && j == 54) { tileIdx = 31; }
      if (i == 50 && j == 55) { tileIdx = 29; }
      if (i == 51 && j == 55) { tileIdx = 30; }
      */

      tileMatrixRow.push({
        tileIdx: tileIdx,
        state: 0
      });
    }
    tileMatrix.push(tileMatrixRow);
  }
  return tileMatrix;
}

export { createWorldTiles };
