import {createSlice} from "@reduxjs/toolkit";
import axios from "../api calls/api calls";



const History = createSlice({
    name:'GetHistory',
    initialState:{
        history:[]
    },

    reducers:{
        GetHistory:(state,action)=>{
            state.history = action.payload
        }
    }

})

// --------------------------------------------------------------------------------------------------------


export function historyAxios() {
 return(dispatch) => {
     axios.get('/api/v1/sale/history').then((res)=>{
         dispatch({
             type:GetHistory,
             payload:res.data
         })
     })
 }
}


export const {GetHistory} = History.actions
export default History.reducer