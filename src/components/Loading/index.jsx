import React from 'react'
import './index.less'

function Loading(props) {

  return (
    <div className="loading-container" style={{ display: !props.show ? "flex" : "none" }}>
      <div className="loading-wrapper">
        <img src={props.url} width="18px" height="18px" alt="loading" />
        <div className="loading-title">{props.title}</div>
      </div>
    </div>
  )
}

export default Loading
