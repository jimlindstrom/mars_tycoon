function animateLanderParachutes(prevState) { /* not exported */
  return {
     ...prevState,
     state: (
       (prevState.yOffset === 0)
       ? 1 /* start of parachute collapse animation */
       : 0 /* parachute up */
     )
  };
}

function animateLanderLanding(prevState) { /* not exported */
  return {
     ...prevState,
     yOffset: Math.max(0, prevState.yOffset - 25)
  };
}

function animateLander(gameStateState, prevState) {
  if (gameStateState === "landing") {
    return animateLanderLanding(
      animateLanderParachutes(prevState)
    );
  }
  else {
    return prevState;
  }
}

function landerAddRoverDeploymentAction(sprite) {
  return {
    ...sprite,
    state: Math.max(1, sprite.state),
    goodAlerts: [
      {
        'msg': 'Lander has landed. Deploy rover?',
        'actions': [
          {'name': 'deploy-rover', 'label': 'Yes'}
        ]
      }
    ]
  }
}

function handleLanderAction(setSprites, curSprite, spriteIdx, promptKey, promptIdx, actionIdx, curAction) {
  if (curAction.name === "deploy-rover") {
    setSprites((prevSprites) => {
      if (promptKey in prevSprites[spriteIdx]) {
        prevSprites[spriteIdx][promptKey] = prevSprites[spriteIdx][promptKey].slice(0,actionIdx) + prevSprites[spriteIdx][promptKey].slice(actionIdx+1);
        if (prevSprites[spriteIdx][promptKey].length === 0) {
          delete prevSprites[spriteIdx][promptKey];
        }
      }
      delete prevSprites[spriteIdx].isSelected;
      const rover = (
        (Math.random() > 0.5)
        ? { tileIdx: 5, state: 0, u: curSprite.u+1, v: curSprite.v, isSelected: true, actions: ['build', 'move'] }
        : { tileIdx: 4, state: 0, u: curSprite.u, v: curSprite.v+1, isSelected: true, actions: ['build', 'move'] }
      );
      // FIXME: add the build action.
      prevSprites.push(rover);
      return prevSprites;
    });
  }
  else {
    console.log('unknown action for lander:', curAction);
  }
}

export { animateLander, landerAddRoverDeploymentAction, handleLanderAction };
