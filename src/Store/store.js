import {configureStore} from '@reduxjs/toolkit'

import Reducer from './Redux/redux'
import ReducerEditDelete from './Redux/Delete,Edit Redux'
import shop from '../Store/Redux/ShopReducer'
import postsell from '../Store/Redux/SaleProduct'
import History from './Redux/HistoryReducer'

import DashboardReducer from './Redux/GetCards'

export default configureStore({
    
    reducer:{
        Reducer,
        ReducerEditDelete,
        shop,
        History,
        postsell,
        DashboardReducer
    },


})