import { useState } from "react"

// hook personalizado


export const useCounter=(initialValue=10)=>{

const [counter, setcounter] = useState(initialValue)

const increment=(value=1)=>{
  setcounter(counter + value)
}

const decrement=(value=1)=>{
  //if(counter===0)return;//validacion 
  setcounter(counter -value)
}

const reset=()=>{
  setcounter(initialValue)
}

  return{
   
counter,
increment,
decrement,
reset
  }
}