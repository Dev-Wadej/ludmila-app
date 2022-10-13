import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../store/store'; 


interface IChatState{
    name:string;
    message:string;
}

const initialState:IChatState={
    name: '',
    message:''
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers:{
        getUser:(state,action:PayloadAction<string>)=>{
                state.name= action.payload
        }
    }
})

export default chatSlice.reducer
export const {getUser} = chatSlice.actions


export const getUserSelector = (state:RootState)=>state.chat.name