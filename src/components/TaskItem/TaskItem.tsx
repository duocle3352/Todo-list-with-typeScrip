import classNames from 'classnames/bind'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Todo } from '../../@types/todo.types'
import styles from './TaskItem.module.scss'

const cx = classNames.bind(styles)

interface TaskItemProps {
  todo: Todo
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

function TaskItem(props: TaskItemProps) {
  const { todo, handleDoneTodo, startEditTodo, deleteTodo } = props
  const { name, id, done } = todo

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(id, e.target.checked)
  }

  return (
    <div className={cx('task')}>
      <input type='checkbox' className={cx('task-check')} checked={done} onChange={handleCheck} />
      <span className={cx('task-name', done && 'task-name__done')}>{name}</span>
      <div className={cx('task-action')}>
        <button className={cx('task-btn')} onClick={() => startEditTodo(id)}>
          <AiOutlineEdit />
        </button>
        <button className={cx('task-btn')} onClick={() => deleteTodo(id)}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}

export default TaskItem
