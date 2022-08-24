import React from 'react';
import './styles.css'

export default function LoadingIndicator({is}) {
  return (
    <div className="loading-cont">
        <div id="anim-1"className="loading-item"/>
        <div id="anim-2"className="loading-item"/>
        <div id="anim-3"className="loading-item"/>
    </div>
  )
}
