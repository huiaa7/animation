import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASR_API,
  timeout: 5000,
});

export default service;
