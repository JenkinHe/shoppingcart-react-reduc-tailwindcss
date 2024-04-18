

import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slcies/cart-slice'



const store = configureStore({
    reducer:{
        cart:cartReducer
    }
});


export default store;