import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsyncOrders = createAsyncThunk(
  'orders/fetchAsyncOrders',
  async function (_, {rejectWithValue, dispatch}) {
    try {
      const {data} = await axios.get('http://localhost:3001/orders');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const asyncAddToOrderss = createAsyncThunk(
  'orders/asyncAddToOrderss',
  async function (obj, {rejectWithValue, dispatch}) {
    try {
      console.log(obj);
      await axios.post(`http://localhost:3001/orders`, obj);
      dispatch(addToOrders(obj));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  orders: [],
  status: null,
  error: null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrders(state, action) {
      console.log(action);
      state.orders.push(action.payload);
    }
  },

  extraReducers: {
    [fetchAsyncOrders.pending] : (state)  => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchAsyncOrders.fulfilled] : (state, action) => {
      state.status = 'resolved';
      state.orders = action.payload;
    },
    [fetchAsyncOrders.rejected] : (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  }
});

export const {addToOrders} = ordersSlice.actions;

export default ordersSlice.reducer;
