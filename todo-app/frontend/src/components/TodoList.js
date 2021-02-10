const TodoList = ({ todos }) => {
    return (
      <ul>
        {todos.map(t => (
          <li key={t.id}>{t.content}</li>
        ))}
      </ul>
    )
  }

  export default TodoList