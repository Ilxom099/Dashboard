import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';


const Sale = createSlice({
    name:'SaleProduct',
    initialState:{
        load: false
    },
    reducers:{
        SaleAllProduct:(state,action) => {
            console.log('worked ')
        }

    }

})


export function ProductSale (data){
      return(dispatch) => {
       axios({
           url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/sold',
           method:'POST',
           data
       }).then((res) =>
           dispatch({
               type:"",
               payload:res.data
           })

       )}
}
export default Sale.reducer