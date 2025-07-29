// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cricketProducts: [],
//     cricketProduct: {},
// }

// const cricketProductSlice = createSlice({
//     name:'cricketProductStore',
//     initialState,

//     reducers:{
//         getcricketProducts:(state, action)=>{
//             state.cricketProducts = action.payload
//         },
//         clearcricketProducts:(state)=>{
//             state.cricketProducts = []
//         },
//         clearcricketProduct:(state)=>{
//             state.cricketProduct = {}
//         },
//         getcricketProduct:(state, action)=>{
//             state.cricketProduct = state?.cricketProducts.filter(val => val?.id === action?.payload)?.[0];
//         },
// }
// })

// export const {getcricketProducts, clearcricketProducts, clearcricketProduct, getcricketProduct} = cricketProductSlice.actions
// export default cricketProductSlice.reducer