import AddTodo from "./Addtodo"
import Todolist from "./todolist"
import { useReducer } from "react";
import TodoContext from "./todocontex";
import todoRedux from "./todoredux";
import TodoDispatchContext from './todocontextdispatch'

function App() {
       
   
  const [list, dispatch] = useReducer(todoRedux, []);


  return (
    <TodoContext.Provider value={{list}}>
    <TodoDispatchContext.Provider value={{dispatch}}>
        
      <AddTodo />
      <Todolist />
      </TodoDispatchContext.Provider>    
    </TodoContext.Provider>
  )
}

export default App
