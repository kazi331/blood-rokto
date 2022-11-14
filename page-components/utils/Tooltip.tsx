import React, { useState } from 'react'
import { TooltipType } from '../../DataTypes'
import styles from './../../styles/Tooltip.module.scss'

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
      className={`tooltipWrapper ${className}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {show && (
        <div className={`tooltipContent ${direction} `}>
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip