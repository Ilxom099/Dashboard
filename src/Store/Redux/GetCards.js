import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export function GetProducts() {

    return(dispatch)=>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/history',
            method:'GET'
        }).then(res=>{
            // eslint-disable-next-line array-callback-return
            const fil = res.data.filter(item => {
                if (item.productList.length !== 0) {
                    return item
                }
            })
            const  prod = fil.sort((a,b)=>{
                if(a.createdAt > b.createdAt) return -1
                if(a.createdAt < b.createdAt) return 1
                return 0

            })

            dispatch({
                type: GetDashboard.type,
                payload: prod
            })
        }).catch(err=>{

        })
    }

}

export function GetYesterday() {

    return(dispatch)=>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/history',
            method:'GET'
        }).then(res=>{
            // eslint-disable-next-line array-callback-return
            const fil = res.data.filter(item => {
                if (item.productList.length !== 0) {
                    return item
                }
            })
            const  prod = fil.sort((a,b)=>{
                if(a.createdAt > b.createdAt) return -1
                if(a.createdAt < b.createdAt) return 1
                return 0

            })
            dispatch({
                type: GetYesterdays.type,
                payload: prod
            })
        }).catch(err=>{

        })
    }

}

export function GetWeekProduct() {

    return(dispatch)=>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/history',
            method:'GET'
        }).then(res=>{
            // eslint-disable-next-line array-callback-return
            const fil = res.data.filter(item => {
                if (item.productList.length !== 0) {
                    return item
                }
            })
            const  prod = fil.sort((a,b)=>{
                if(a.createdAt > b.createdAt) return -1
                if(a.createdAt < b.createdAt) return 1
                return 0

            })
            dispatch({
                type: GetWeek.type,
                payload: prod
            })
        }).catch(err=>{

        })
    }

}

export function GetWeeks() {

    return(dispatch)=>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/history',
            method:'GET'
        }).then(res=>{
            // eslint-disable-next-line array-callback-return
            const fil = res.data.filter(item => {
                if (item.productList.length !== 0) {
                    return item
                }
            })
            const  prod = fil.sort((a,b)=>{
                if(a.createdAt > b.createdAt) return -1
                if(a.createdAt < b.createdAt) return 1
                return 0

            })
            dispatch({
                type: GetWeekAnalitic.type,
                payload: prod
            })
        }).catch(err=>{

        })
    }

}

const DashboardReducer = createSlice({
    name:'Dashboard',
    initialState:{
        dashboard:[],
        sat:[],
        sort:[],
        week:[],
        soldTable:[],
    },
    reducers:{

        GetDashboard:(state,action)=> {
            console.log(action.payload)
            // eslint-disable-next-line no-unused-vars
            const date = new Date(Date.now())
            const yesday = new Date()
            const Day = yesday.getDate() - 1
            const Mon = yesday.getMonth() + 1
            const Year = yesday.getFullYear()
            // eslint-disable-next-line no-unused-vars
            const YesDay = `${Year}-${Mon}-${Day}`

            // eslint-disable-next-line array-callback-return
            state.dashboard = action.payload.filter((item) => {
                if (item.createdAt.substring(0, 10) === '2021-09-17') {

                    return item

                }

            })



        },

        GetYesterdays:(state,action)=>{
            // eslint-disable-next-line no-unused-vars
            const date = new Date(Date.now())
            const yesday = new Date()
            const Day = yesday.getDate()-1
            const Mon = yesday.getMonth()+1
            const Year = yesday.getFullYear()
            // eslint-disable-next-line no-unused-vars
            const YesDay = `${Year}-${Mon}-${Day}`

            // eslint-disable-next-line array-callback-return
            state.sat = action.payload.filter((item) => {

                if (item.createdAt.substring(0, 10) === '2021-09-30') {

                    return item

                }
            })


        },

        GetWeek:(state ,action)=>{

            // eslint-disable-next-line no-unused-vars
            const yesday = new Date()
            const asas = action.payload.filter(({ createdAt }) => {
                const date = new Date(createdAt);
                const myDate = new Date(Date.now());
                myDate.setDate(myDate.getDate() - 12);

                return date >= myDate;
            })

            state.sort = asas.map((item) => {
                return {
                    date: item.createdAt.substring(0, 10), price: item.productList.reduce((t, d) => {
                        return t += d.product.price
                    }, 0)
                }
            })
        },

        GetWeekAnalitic:(state ,action)=>{
            const asas = action.payload.filter(({ createdAt }) => {
                const date = new Date(createdAt);
                const myDate = new Date(Date.now());
                myDate.setDate(myDate.getDate() - 16);

                return date >= myDate;
            })
            // eslint-disable-next-line array-callback-return
            state.soldTable = asas.filter((item) => {
                if (item.productList.length > 4) {

                    return item.productList
                }
            })

            state.week = asas.map((item) => {
                return {
                    date: new Date(item.createdAt).toLocaleDateString(), price: item.productList.reduce((t, d) => {
                        return t += d.product.price
                    }, 0)
                }
            })
        }


    }
})


export const {GetDashboard,GetYesterdays,GetWeek,GetWeekAnalitic} = DashboardReducer.actions
export default DashboardReducer.reducer
console.log(typeof  GetDashboard)
