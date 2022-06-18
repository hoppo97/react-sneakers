import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export const fetchCartItems = createAsyncThunk(
  'cartItems/fetchCartItems',
  async function (_, {rejectWithValue}) {
    try {
      const {data} = await axios.get('http://localhost:3001/cart');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const asyncAddToCart = createAsyncThunk(
  'cartItems/asyncAddToCart',
  async function (obj, {rejectWithValue, dispatch}) {
    try {
      await axios.post('http://localhost:3001/cart', obj);
      console.log(obj);
      dispatch(addToCart(obj));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const asyncRemoveFromCart = createAsyncThunk(
  'cartItems/asyncRemoveFromCart',
  async function (id, {rejectWithValue, dispatch}) {
    try {
      await axios.delete(`http://localhost:3001/cart/${id}`);
      dispatch(removeFromCart(id))
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const asyncAllRemoveFromCart = createAsyncThunk (
  'cartItems/asyncAllRemoveFromCart',
  async function (arr, {rejectWithValue, dispatch}) {
    try {
      await axios.delete(``)
    } catch (error) {
      
    }
  }
);

const initialState = {
  totalPrice: 0,
  cartItems: [],
  status: null,
  error: null,
};

export const cartSlice = createSlice ({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
    }
  },

  extraReducers: {
    [fetchCartItems.pending] : (state) => {
      state.status = 'loading';
    },
    [fetchCartItems.fulfilled] : (state, action) => {
      state.status = 'resolved'
      state.cartItems = action.payload;
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    [fetchCartItems.rejected] : (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [asyncAddToCart.rejected] : (state) => {
      state.status = 'error';
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;