import { useState } from 'react'

export const Switch = () => {
  const [value, setValue] = useState(false)

  const handleChange = e => {
    setValue(e.target.checked)
  }

  return (
    <div>
      <input type='checkbox' checked={value} onChange={handleChange} />
      <span>{value ? 'Включено' : 'Выключено'}</span>
    </div>
  )
}
