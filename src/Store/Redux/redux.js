import {createSlice} from "@reduxjs/toolkit";
import axios from '../api calls/api calls'
import {toast} from "react-toastify";


export function GetProduct( ) {
 return (dispatch) => {
     axios.get('/api/v1/product').then(res => {
         dispatch({
             type:GetProducts.type,
             payload:res.data,
         })

         }).catch(err => {

     })
 }
}

export function AddProduct(data) {
    return (dispatch) => {
        axios.post('/api/v1/product',data).then(res => {
            dispatch({
                type:AddProducts.type,
                payload:res.data,
            })

        }).catch(err => {

        })
    }
}

const Reducer = createSlice({
    name:'Product',
    initialState:{
      Product:[],
        History:[]
    },

    reducers:{
        GetProducts:(state,action)=>{
            state.Product = action.payload.sort((a,b) => {
                if (a.id > b.id) return 1
                if (a.id < b.id) return -1
                return 0
            })

        },
        AddProducts:(state,action)=>{
            state.Product.unshift(action.payload)
            toast.success('Product saved')
        }

    }

})
export const {GetProducts,AddProducts,GetHistory} = Reducer.actions
export default Reducer.reducer