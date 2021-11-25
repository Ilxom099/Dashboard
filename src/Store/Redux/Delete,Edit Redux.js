import {createSlice} from "@reduxjs/toolkit";
import axios from '../api calls/api calls'


export function DeleteProduct(data){

    return (dispatch) =>{
        axios.delete(' /api/v1/product/'+data).then(res=>{
                dispatch({
                    type:DeleteProducts.type,
                    payload:res.data
                })

            }).catch(err=>{
                 alert(err)
        })

    }

}

export function EditProduct(data){
    return (dispatch) =>{

        axios.put('/api/v1/product/'+data.id,data).then(res=>{

                dispatch({
                    type:EditProducts.type,
                    payload:res.data,

                })

            }).catch(err=>{
              alert(err)
        })

    }

}
const ReducerEditandDelete = createSlice({
    name:'Product',

    initialState:{
    },

    reducers:{

        EditProducts:(state,action)=>{

            alert('edit save')
        },
        DeleteProducts:(state,action)=>{

            alert('delete')
        }
    }


})

export const {DeleteProducts,EditProducts} =  ReducerEditandDelete.actions
export default ReducerEditandDelete.reduce