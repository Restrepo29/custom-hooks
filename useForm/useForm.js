import { useState } from "react";




export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm)
    
   const onResetForm=()=>{
    setFormState(initialForm)
   }
    
    const onInputChange=({target})=>{
    const{value,name}=target;
    //console.log({name,value})
    setFormState({
        ...formState,//para mantener todas las propiedades 
        [name]:value//el name va a ser igual al nuevo value
    });
    }

  return {
...formState,
    formState,
    onInputChange,
    onResetForm

  }
}
