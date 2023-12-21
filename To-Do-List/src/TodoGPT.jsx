import { useReducer, useState } from 'react'
import './App.css'

// Reducer function
const taskReducer = (state, action) => {

  switch (action.type) {


    case 'ADD_TASK':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ]


    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload)

      
    case 'TOGGLE_COMPLETED':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      )
    default:
      return state
  }
}

function TodoGPT() {
  let initialValue = [
    {
      id: 1,
      text: 'task1',
      check: false,
    },
    {
      id: 2,
      text: 'task2',
      check: false,
    },
    {
      id: 3,
      text: 'task3',
      check: false,
    },
  ]
  const [tasks, dispatch] = useReducer(taskReducer, initialValue)
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: newTask })
      setNewTask('')
    }
  }

  const removeTask = (taskId) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId })
  }

  const toggleCompleted = (taskId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: taskId })
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Add Task Form */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoGPT
