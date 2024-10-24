import { createSlice,configureStore } from "@reduxjs/toolkit";



let myslice=createSlice({
    name:"slice",
    initialState:{
        login:false
    },
    reducers:{
mylogin(store,action){
    store.login=true
}
    }
})

export let myreducer=myslice.actions
let Store=configureStore(myslice)
export default Store