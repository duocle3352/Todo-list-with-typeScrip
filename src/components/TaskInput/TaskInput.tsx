import classNames from 'classnames/bind'
import { useState } from 'react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'

import { Todo } from '../../@types/todo.types'
import styles from './TaskInput.module.scss'

const cx = classNames.bind(styles)

interface TaskInputProp {
  currentTodo: Todo | null
  addTodo: (name: string) => void
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

function TaskInput(props: TaskInputProp) {
  const { currentTodo, addTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    currentTodo ? editTodo(value) : setName(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }

  return (
    <div className='mb-2'>
      <h1 className={cx('title')}>To do list</h1>
      <form className={cx('from')} onSubmit={handleSubmit}>
        <input
          type='text'
          value={currentTodo ? currentTodo.name : name}
          placeholder='Caption goes here'
          onChange={handleChangeInput}
        />
        <button type='submit'>{currentTodo ? <AiOutlineCheck /> : <AiOutlinePlus />}</button>
      </form>
    </div>
  )
}

export default TaskInput
