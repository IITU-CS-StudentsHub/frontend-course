import { useEffect, useState } from 'react'
import { AddItem } from '../list-manager/add-item/AddItem'
import { ItemsList } from '../list-manager/items-list/ItemsList'

const saveToLocalStorage = list => {
  localStorage.setItem('taskList', JSON.stringify(list))
}

export const TaskList = () => {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem('taskList')
    if (savedList) {
      return JSON.parse(savedList)
    }
    return []
  })

  const handleAdd = item => {
    setList(prevList => {
      return [...prevList, item]
    })
  }

  const handleRemove = index => {
    setList(prevList => {
      return prevList.filter((_, i) => i !== index)
    })
  }

  useEffect(() => {
    saveToLocalStorage(list)
  }, [list])

  return (
    <div>
      <AddItem onAdd={handleAdd} />

      <ItemsList list={list} handleRemove={handleRemove} />
    </div>
  )
}
