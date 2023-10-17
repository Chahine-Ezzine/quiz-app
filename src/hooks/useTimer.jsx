import { useState, useEffect, useRef } from 'react'

function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`
  }

  return { time, stopTimer, formatTime }
}

export default useTimer
