import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
    //To abstract the value from useTodo
    const [isTodoEditable ,setIsTodoEditable] = useState(false)
    const [TodoMsg , setTodoMsg] = useState(todo.todo)
    const {updateTodo ,removeTodo,toggleComplete} = useTodo()

    //The function for edit your specific todo
    const editTodo = () =>{
        updateTodo(todo.id, {...todo , todo:TodoMsg})
        setIsTodoEditable(false)
    }
    
    //Function to check the function either task is completed or not
    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#73bcda]" : "bg-[#7aa5d6]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={TodoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "🫙" : "🖋️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeTodo(todo.id)}
            >
              ✔️
            </button>
        </div>
    );
}

export default TodoItem;
//bg-gray-50 hover:bg-gray-100
