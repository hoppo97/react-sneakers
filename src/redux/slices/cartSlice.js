import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk(
  'cartItems/fetchCartItems',
  async function (_, {rejectWithValue}) {
    try {
      const {data} = await axios.get('http:localhost:3001/cart');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cartItems: [],
  status: null,
  error: null,
};


export const cartItems = createSlice ({
  name: 'cartItems',
  initialState,
  reducer: {

  },

  extraReducers: {

  }
});