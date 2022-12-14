import { createSlice } from "@reduxjs/toolkit";
import { cartState, cartItem } from "../../components/types";

const initialState: cartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  // totalQty:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item?.id === newItem.id
      );

      state.totalQuantity++;
      if (!existingItem) {
        const item: cartItem = {
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        };
        state.cartItems.push(item);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item?.totalPrice) * Number(item?.quantity),
        0
      );
    },
    deleteItem:(state,action)=>{
      const id=action.payload
      const existingItem=state.cartItems.find(
        (item) => item?.id === id)
  // console.log("jkhqgd");
  
      if(existingItem){
        state.cartItems=state.cartItems.filter((item) => item?.id !== id)
        state.totalQuantity=state.totalQuantity-existingItem.quantity
      }
  
      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item?.totalPrice) * Number(item?.quantity),
        0
      );
    }
  },
  
 
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
