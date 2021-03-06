import React, { useState, useRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './ThanosGlove.scss'

const c = classnames => {
  return Object.keys(classnames)
    .filter(key => classnames[key])
    .join(' ')
}

function ThanosGlove({ className, size, duration, type, mute, onClick, onAnimationEnd, ...props }) {
  const [idle, setIdle] = useState(true)
  const [firstLoad, setFirstLoad] = useState(true)
  const timoutRef = useRef(undefined)
  const audioRef = useRef(undefined)
  const actionImgSrc = `https://s3.ap-northeast-2.amazonaws.com/thanos.jiggum/assets/thanos-${type}.png`
  const actionSoundSrc = `https://s3.ap-northeast-2.amazonaws.com/thanos.jiggum/assets/thanos-${type}-sound.mp3`

  const playAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }, [])

  const handleClick = useCallback(
    e => {
      if (!idle) return
      setIdle(false)
      setFirstLoad(false)
      if (!mute) playAudio()
      if (onClick) onClick(e)
    },
    [idle, mute, duration],
  )

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 13) handleClick(e)
    },
    [handleClick],
  )

  const handleAnimationEnd = useCallback(
    e => {
      setIdle(true)
      onAnimationEnd(e)
    },
    [onAnimationEnd],
  )

  useEffect(() => {
    const img = new window.Image()
    img.src = actionImgSrc
    audioRef.current = new window.Audio(actionSoundSrc)
  }, [type])

  useEffect(() => () => window.clearTimeout(timoutRef.current), [])

  return (
    <div
      className={c({
        [styles.wrapper]: true,
        [className]: className,
      })}
      style={{
        width: size,
        height: size,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      {...props}
    >
      <img
        className={c({
          [styles.idle]: idle,
          [styles.hide]: !idle && !firstLoad,
        })}
        src="https://s3.ap-northeast-2.amazonaws.com/thanos.jiggum/assets/thanos-idle.png"
        role="presentation"
        alt=""
      />
      <div
        className={c({
          [styles.snap]: !idle,
          [styles.hide]: idle && !firstLoad,
        })}
        style={{
          animationDuration: `${duration}ms`,
          backgroundImage: `url('${actionImgSrc}')`,
        }}
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  )
}

ThanosGlove.defaultProps = {
  className: null,
  size: 80,
  duration: 2000,
  type: 'snap',
  mute: false,
  onClick: null,
  onAnimationEnd: null,
}

ThanosGlove.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  duration: PropTypes.number,
  type: PropTypes.oneOf(['snap', 'time']),
  mute: PropTypes.bool,
  onClick: PropTypes.func,
  onAnimationEnd: PropTypes.func,
}

export default ThanosGlove
