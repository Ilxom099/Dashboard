import {createSlice} from '@reduxjs/toolkit'

const shop = createSlice({
    name:'shop',
    initialState:{
        ShopCard:[]

    },
    reducers:{
        ShopCards:(state,action)=>{
            const NewItem = {
                productId:action.payload.id,
                productName: action.payload.productName,
                price:action.payload.price,
                amount:1,
                imageId:action.payload.imageId,
                description:action.payload.description
            }
            state.ShopCard.push(NewItem);
        },
        DeleteShop:(state,action)=>{
            state.ShopCard.map((item,index) => {
                if(item.productId === action.payload){
                    state.ShopCard.splice(index,1)
                }
            })
        },
        getValue:(state,action)=>{
            state.ShopCard.map((item,index)=>{
                if(item.productId === action.payload.productId){
                    state.ShopCard[index].amount = parseInt(action.payload.count);

                }
                if (item.amount === 0){
                    state.ShopCard.splice(index,1)
                }
            })
        },

        Clear:(state,action)=>{
             state.ShopCard = action.payload
        }
    }
})

// -------------------------------------------------------------------------------------------------------------

export function ToShop(data) {
    return(dispatch) => {
        dispatch({
            type:ShopCards.type,
            payload:data
        })
    }
}
export function DeleteToShop(data) {
    return(dispatch) => {
        dispatch({
            type:DeleteShop.type,
            payload:data
        })
    }
}


export function ClearShop(data) {
    return(dispatch) => {
        dispatch({
            type:Clear.type,
            payload:[],

        })
    }

}

export function GetValue(data) {
    return(dispatch) => {
        dispatch({
            type:getValue.type,
            payload:data
        })
    }
}

export const {ShopCards,DeleteShop,getValue,Clear} = shop.actions
export default shop.reducer;