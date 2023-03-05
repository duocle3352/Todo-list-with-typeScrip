import classNames from 'classnames/bind'
import { TaskItem } from '../TaskItem'
import { Todo } from '../../@types/todo.types'
import styles from './TaskList.module.scss'

const cx = classNames.bind(styles)

interface TaskListProps {
  isDoneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

function TaskList(props: TaskListProps) {
  const { todos, isDoneTaskList, handleDoneTodo, startEditTodo, deleteTodo } = props

  return (
    <div className='mb-2'>
      <h1 className={cx('title')}>{isDoneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h1>
      <div className={cx('tasks')}>
        {todos.map((todo) => (
          <TaskItem
            todo={todo}
            key={todo.id}
            handleDoneTodo={handleDoneTodo}
            startEditTodo={startEditTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
