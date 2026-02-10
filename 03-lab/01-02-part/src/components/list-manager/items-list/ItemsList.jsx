import { memo } from 'react'
import { ListItem } from './list-item/ListItem'

export const ItemsList = memo(({ list, handleRemove }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <ListItem id={index} item={item} onRemove={handleRemove} />
        ))}
      </ul>
    </div>
  )
})
