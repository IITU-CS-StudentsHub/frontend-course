import { memo } from 'react'

export const ListItem = memo(({ id, item, onRemove }) => {
  return (
    <li key={id}>
      {item}
      <button onClick={() => onRemove(id)}>Remove</button>
    </li>
  )
})
