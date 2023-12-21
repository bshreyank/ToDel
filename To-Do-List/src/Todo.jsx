import { useReducer } from 'react'

const Todo = () => {
  let initialValue = [
    {
      id: 1,
      task: 'task1',
      check: false,
    },
    {
      id: 2,
      task: 'task2',
      check: false,
    },
    {
      id: 3,
      task: 'task3',
      check: false,
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
            check: false,
          },
        ]

      case 'DEL':
        return state.filter((m) => m.id !== action.payload)
      // case 'CH': return(state.map(m=>
      //   { return
      //     if(m.id==action.payload)
      //     {
      //       m.check=true;
      //     }
      //   }))
    }
  }

  
  let data = ''
  //  let check='';
  const handleForm = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD', payload: data })
    console.log(e.target.value)
  }

  const [todo, dispatch] = useReducer(reducer, initialValue)

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <form onSubmit={handleForm}>
          <input type="text" onChange={(e) => (data = e.target.value)} />

          <button type="submit">Add</button>
        </form>
      </div>
      {
        todo.map((m) => (
        <li key={m.id}>
          {m.task}
          <input
            type="checkbox"
            onChange={() => dispatch({ type: 'CH', payload: m.id })}
          />
          <button onClick={() => dispatch({ type: 'DEL', payload: m.id })}>
            Delete
          </button>
        </li>
      ))
      }
    </div>
  )
}

export default Todo
