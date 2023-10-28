import Axios from "../lib/Axios";
import {  createAsyncThunk } from '@reduxjs/toolkit'
// import getUserToken  from '../Auth/authLocalStorage';


const registerUser = async (userData, thunkAPI) => {
  try {
    const response = await Axios.post(`/users/register`, userData);
    console.log(response)
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await Axios.post(`/user/login`, userData);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const validateUser = async (token) => {
  try {
    const response = await Axios.get(`/user/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export {registerUser , loginUser , validateUser}