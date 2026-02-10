import { useEffect, useState } from 'react'

export const Timer = () => {
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    if (timer <= 0) return

    const intervalId = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timer])

  return (
    <div>
      <h1>Timer: {timer}</h1>
    </div>
  )
}
