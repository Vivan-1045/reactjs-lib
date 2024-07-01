import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../feature/todo/todoSlice'
export const Store = configureStore({
    reducer : todoReducers
})