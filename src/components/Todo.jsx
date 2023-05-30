const Todo = ({toDo, removeTodo, completeTodo}) => {
  return (
    <div className='todo' style={{textDecoration: toDo.isCompleted ? "line-through" : ""}}>
          <div className='content'>
            <p>{toDo.text}</p>
            <p className='category'>({toDo.category})</p>
          </div>
          <div>
            <button className='complete' onClick={() => completeTodo(toDo.id)}>Completar</button>
            <button className='remove' onClick={() => removeTodo(toDo.id)}>X</button>
          </div>
        </div>
  )
}

export default Todo