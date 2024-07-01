import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'


function AddTodo() {
   //its a state 
   const[input ,setInput] = useState('')
   //syntax of usedispatch
   const dispatch = useDispatch()
   //onSubmit Event handler 
   const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')

   }
//    const addtodoInlist = (e) => {
//     e.preventDefault()
//     dispatch(Todos(todos))

//    }

 
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Notes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        // onClick={addtodoInlist}
      >
        Add Notes
      </button>
    </form>
  )
}

export default AddTodo
