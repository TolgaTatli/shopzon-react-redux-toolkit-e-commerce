import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetails: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productStatus = STATUS.FAIL;
      });
  },
});
