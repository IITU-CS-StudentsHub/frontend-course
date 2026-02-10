import { useCallback, useState } from 'react'
import { AddItem } from './add-item/AddItem'
import { ItemsList } from './items-list/ItemsList'

export const ListManager = () => {
  const [list, setList] = useState([])

  const removeItem = useCallback(index => {
    setList(prevList => prevList.filter((_, i) => i !== index))
  }, [])

  const handleAdd = useCallback(value => {
    setList(prevList => [...prevList, value])
  }, [])

  return (
    <div>
      <AddItem onAdd={handleAdd} />

      <ItemsList list={list} handleRemove={removeItem} />
    </div>
  )
}
