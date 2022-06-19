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
)

const initialState = {
  orders: [],
  status: null,
  error: null,
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {

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
    }

  }
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
