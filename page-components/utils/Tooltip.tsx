import React, { useState } from 'react'
import { TooltipType } from '../../DataTypes'

const Tooltip = ({ children, direction, content, delay, className }: TooltipType) => {
  const [show, setShow] = useState(false);

  let timeOut: number;
  const showTip = () => {
    timeOut = window.setTimeout(() => {
      setShow(true)
    }, delay || 400);
  }
  const hideTip = () => {
    clearInterval(timeOut);
    setShow(false);
  }
  return (
    <div
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {show && (
        <div className={`tooltip-content ${direction || 'top'}`}>
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip