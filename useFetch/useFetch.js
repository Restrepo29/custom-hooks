import { useState,useEffect } from "react"

//se va a incorporar cache 
const localCaChe={}
export const useFetch = (url) => {

const [state, setstate] = useState({
    data:null,
    isLoading:true,
    hasError:false,
    error:null,
    
})
useEffect(() => {
 getFetch()
}, [url])//que se renderice cuando el url cambia

const setLoadingState=()=>{//para que cuando cargue vuelva a aparecer el valor de nulo y cargando
    setstate({
        data:null,
    isLoading:true,
    hasError:false,
    error:null,
    });
}

 const getFetch=async()=>{

    if(localCaChe[url]){
        console.log('usando caché');
        setstate({
            data:localCaChe[url],
            isLoading:false,
            hasError:false,
            error:null,
        })
        return;
    }

    setLoadingState();


const resp= await fetch(url);

//sleep
await new Promise(resolve=>setTimeout(resolve,1500));
if(!resp.ok){
    setstate({
        data:null,
    isLoading:false,
     hasError:true,
     error:{
        code:resp.status,
        message:resp.statusText,
     }
     });
     return;//si hay un error este es el fin de mi codigo para eso se usa el return
}
const data= await resp.json();
setstate({
data:data,
isLoading:false,
hasError:false,
error:null,
})
//console.log({data})

//Manejo del caché
localCaChe[url]=data;//ya se esta almacenando


}
      


  return {
    data:state.data,
    isLoading:state.isLoading,
    hasError:state.hasError,
    
   

}}
