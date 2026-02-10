import { useEffect, useState } from 'react'

export const ChangeTheme = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <h1>Change Theme</h1>
      <h2>Current Theme: {theme}</h2>

      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}
