import { useReducer } from 'react'

const TodoList = () => {
  const initialValue = [
    {
      id: 1,
      task: 'task 1',
    },
    {
      id: 2,
      task: 'task 2',
    },
    {
      id: 3,
      task: 'task 3',
    },
  ]

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: state.length + 1,
            task: action.payload,
          },
        ]

      case 'DEL':
        return state.filter((m) => m.id !== action.payload)

      default:
        return state
    }
  }

  let data = ''
  const handleForm = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD', payload: data })
    console.log(e.target.value)
  }

  const [todo, dispatch] = useReducer(reducer, initialValue)

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <h1>To Do List</h1>
        <form onSubmit={handleForm}>
          <input type="text" onChange={(e) => (data = e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </div>
      {todo.map((m) => (
        <li key={m.id}>
          {m.task}
        
          <input type="checkbox" />

          <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>

          <button onClick={() => dispatch({ type: 'DEL', payload: m.id })}>
            Delete
          </button>
        </li>
      ))}
    </div>
  )
}

export default TodoList
