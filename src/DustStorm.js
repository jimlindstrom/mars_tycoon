import { weightedRandom } from './StatsHelpers.js';

function animateDustStorm(prevState) {
  const moves   = [ [0,0], [0,0], [0,0], [1,0], [-1,0], [0,1], [0,-1] ];
  const weights = [  0.8, 0.2/7, 0.2/7, 0.2/7 , 0.2/7, 0.2/7, 0.2/7 ];
  const move = weightedRandom(moves, weights);
  return {
     ...prevState,
     u: prevState.u + move[0],
     v: prevState.v + move[1]
  };
}

export { animateDustStorm };
