

export const todoReducer=(initialState=[],action)=>{


    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState,action.payload];

            case '[TODO] Remove Todo':
                return initialState.filter(todo=>todo.id !== action.payload)//el filter regresa un nuevo areeglo
              
             case '[TODO] Toggle Todo':  
               return initialState.map( todo =>{

                if(todo.id=== action.payload) {// id
                   return{
                    ...todo,
                    done:!todo.done
                   }
                }   
                
                return todo;
               })
                default:
            return initialState;
            
    }
}