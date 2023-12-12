import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductURL,
  productListUrl,
} from "../../api/productsUrl";
import axios from "axios";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (payload) => {
    const res = await axios.post(
      addProductURL(),
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  }
);

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (payload) => {
    const res = await axios.get(productListUrl(), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res.data.products;
  }
);
