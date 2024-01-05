import { createSlice } from "@reduxjs/toolkit";

// creating initial state for handling initial loading or error whatever

const initialState = {
    currentUser:null,
    error:null,
    loading:false
};

const userSlice = createSlice({
    name:'user',
    initialState,
    //creating functions
    reducers:{
        signInStart:(state) =>{
            state.loading = true;
        },
        //action is the data we get after hitting from the signin api from database
        // action.payload (it is the whole data we get )
        signInSuccess:(state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure:(state,action) => {
            state.error = action.payload,
            state.loading = false
            console.log(state);
        },

    }
})
export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;//exporting as actions
export default userSlice.reducer;//we export it default so we can change this reducer function in store.js