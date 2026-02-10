import { useState } from 'react'
import styles from './ButtonInteractive.module.css'

export const ButtonInteractive = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div>
      <button
        className={`${styles.button} ${isHovered ? styles.hovered : ''} ${isClicked ? styles.clicked : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  )
}
