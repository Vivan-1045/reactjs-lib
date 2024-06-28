import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  //FUNCTIONALITY OF BASIC CONTEXT
  //state
  const [todos, settodos] = useState([])
  // function to add a todo in your todolist
  const addTodo =(todo) => {
    settodos((prev) => [{id:Date.now(),...todo},...prev])
  }
  // function to update a todo in your todolist
  const updateTodo = (id , todo) =>{
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  // function to remove todo from your todolist
  const removeTodo = (id) => {
     settodos((prev) => prev.filter((todo) => todo.id !==id))
  }
  //Function to toggle the todo
  const toggleComplete = (id) =>{
    settodos((prev) => prev.map((prevTodo) => prevTodo.id == id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }

  //FUNCTIONALITY OF LOCAT STORAGE
  //UseEffect to get the values from local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      settodos(todos)
    }
  },[])
  //UseEffect to set the values of local Storage
  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,removeTodo,toggleComplete}}>
    <div className="bg-[#11233d] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-8 mt-2 underline">Set Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>(
                          <div key={todo.id} className='w-full'>

                         <TodoItem todo = {todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
