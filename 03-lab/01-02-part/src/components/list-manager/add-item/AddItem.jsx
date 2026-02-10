import { memo, useState } from 'react'

export const AddItem = memo(({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleChange = e => setValue(e.target.value)

  const handleInternalClick = () => {
    onAdd(value)
    setValue('')
  }

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} />
      <button disabled={!value} onClick={handleInternalClick}>
        Add
      </button>
    </div>
  )
})
