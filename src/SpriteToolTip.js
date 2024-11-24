function SpriteToolTipActions(tooltipItem, handleTooltipActionClick) {
  return (
    <div className="actions">
      <div className="actionHeader">Actions</div>
      {tooltipItem.actions.map((action, actionIdx) => {
        if (action == "move") {
          return (
            <div
                key={"action-"+actionIdx}
                className="actionButton"
                onClick={() => {handleTooltipActionClick(tooltipItem, action)}}>
              <img src={process.env.PUBLIC_URL+"/movement.png"} />
              <br/>
              Move
              </div>
          );
        }
        else if (action == "build") {
          return (
            <div
                key={"action-"+actionIdx}
                className="actionButton"
                onClick={() => {handleTooltipActionClick(tooltipItem, action)}}>
              <img src={process.env.PUBLIC_URL+"/construction_tools.png"} />
              <br/>
              Build
            </div>
          );
        }
        else {
          console.log('unknown action:', action);
          return null;
        }
      })}
    </div>
  );
}

function SpriteToolTipBadAlerts(tooltipItem, handleTooltipPromptClick) {
  return (
    <div className="prompts">
      {tooltipItem.badAlerts.map((curPrompt, promptIdx) => {
        return (
          <div key={"tooltip-prompt-"+promptIdx} className="prompt">
            <div className="redTag">Bad News</div>
            <div className="msg">{curPrompt.msg}</div>
            {curPrompt.actions.map((action, actionIdx) => {
              return (
                <button
                  key={"tooltip-action-"+promptIdx+"-"+actionIdx}
                  name="action"
                  onClick={() => {handleTooltipPromptClick(tooltipItem, 'badAlerts', promptIdx, actionIdx)}}
                  value={action.name}>{action.label}</button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function SpriteToolTipGoodAlerts(tooltipItem, handleTooltipPromptClick) {
  return (
    <div className="prompts">
      {tooltipItem.goodAlerts.map((curPrompt, promptIdx) => {
        return (
          <div key={"tooltip-prompt-"+promptIdx} className="prompt">
            <div className="greenTag">Good News!</div>
            <div className="msg">{curPrompt.msg}</div>
            {curPrompt.actions.map((action, actionIdx) => {
              return (
                <button
                  key={"tooltip-action-"+promptIdx+"-"+actionIdx}
                  name="action"
                  onClick={() => {handleTooltipPromptClick(tooltipItem, 'goodAlerts', promptIdx, actionIdx)}}
                  value={action.name}>{action.label}</button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function SpriteToolTip(images, tooltipXy, tooltipItem, handleTooltipActionClick, handleTooltipPromptClick) {
  const actions = (
    tooltipItem.actions
    ? SpriteToolTipActions(tooltipItem, handleTooltipActionClick)
    : null
  );
  const badAlerts = (
    tooltipItem.badAlerts
    ? SpriteToolTipBadAlerts(tooltipItem, handleTooltipPromptClick)
    : null
  );
  const goodAlerts = (
    tooltipItem.goodAlerts
    ? SpriteToolTipGoodAlerts(tooltipItem, handleTooltipPromptClick)
    : null
  );
  if (goodAlerts || badAlerts) {
    tooltipXy[1] -= 100;
  }
  const styleDict = {display: "block", left: tooltipXy[0], top: tooltipXy[1]};
  return (
    <div className="isoMapTooltip" style={styleDict}>
      <h2>{images[tooltipItem.tileIdx].name || 'Unknown Item'}</h2>
      <div className="description">{images[tooltipItem.tileIdx].desc || null}</div>
      {actions}
      {badAlerts}
      {goodAlerts}
    </div>
  );
}

export { SpriteToolTip };
