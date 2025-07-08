import { useEffect,useReducer } from "react";
import { todoReducer } from "./TodoReducer";


    const init=()=>{
        return JSON.parse(localStorage.getItem('todos') || [])//se encarga de cargar los todos


    }

export const useTodo = () => {

   

     const [todos, dispatch] = useReducer(todoReducer,[],init)//el todoReducer no se ejecuta, solo se pasa la referencia
 

    
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos) )//en local storage solo se puede grabar string

  
}, [todos])

    const handleNewTodo=(todo)=>{
   // console.log({todo})
   const action={  //creo la accion
    type:'[TODO] Add Todo',
    payload:todo
   }
   dispatch(action);// se la envio al dispatch
  }

  const handleDeleteTodo=(id)=>{
    console.log({id})
    dispatch({
       type:'[TODO] Remove Todo',
    payload:id
   })
  }
  
   const handleToggleTodo=(id)=>{
    console.log({id})
     dispatch({
       type:'[TODO] Toggle Todo',
    payload:id
   })
   
  }
    return{
        
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount:todos.length,
        pendingTodosCount:todos.filter(todo=>!todo.done).length


    }
    

}