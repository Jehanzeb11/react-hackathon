import {configureStore} from "@reduxjs/toolkit"
import transportPostSlice from "./transportPost"


const store = configureStore({
reducer:{
    transportPost : transportPostSlice,
}

})

export default store