import axios from 'axios'

const TodoList = ({ setTodos, todos, updateTodo }) => {

  const setChecked = (id, e) => {
    updateTodo(id, e.target.checked)
    setTodos(todos.map(x => {
      if(id == x.id) x.done = !x.done
      return x
    }))
  }
    return (
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.content} | 
            <span>done 
            <input type="checkbox" onChange={e => setChecked(t.id,e)} checked={t.done}/>
            </span>
            </li>
        ))}
      </ul>
    )
  }

  export default TodoList