import { useState } from 'react'
import { Helmet } from 'react-helmet'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import './App.css'
import Filter from './components/Filter'

function App() {
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")
  const [search, setSearch] = useState("")
  const [toDo, setToDo] = useState([
    {
      id: 1,
      text: "Criar Funcionalidade X",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    }
  ])

  const addTodo = (text, category) => {
    const newTodo = [
      ...toDo,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }
    ]
    setToDo(newTodo)
  }

  const removeTodo = (id) => {
    const newTodos = [...toDo]
    const filteredTodos = newTodos.filter(toDo => 
      toDo.id !== id ? toDo : null
      )
      setToDo(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...toDo]
    newTodos.map((toDo) => toDo.id === id ? toDo.isCompleted = !toDo.isCompleted : toDo) 
    setToDo(newTodos)
  }

  return (
    <div className='app'>
      <Helmet>
        <title>To do List</title>
      </Helmet>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {toDo
        .filter((toDo) => 
          filter === "All" 
            ? true 
            : filter === "Completed" 
            ? toDo.isCompleted 
            : !toDo.isCompleted)
          .filter((toDo) => 
            toDo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => 
          sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : !a.text.localeCompare(b.text))
        .map((toDo) => (
          <Todo key={toDo.id} toDo={toDo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
