
import React from 'react';

export const useLocalStorage =(key:string | null, initialValue?:any)=>{

    const [state,setState]= React.useState(()=>{
        if(!initialValue)return
       const value= window.localStorage.getItem(key!)
       return value ? JSON.parse(value) : initialValue;
    })

    React.useEffect(()=>{
        if(state){
            window.localStorage.setItem(key!, JSON.stringify(state));
        }
    },[state,key])
    return {state,setState}
}