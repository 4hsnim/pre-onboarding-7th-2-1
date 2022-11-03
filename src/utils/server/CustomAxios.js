import axios from "axios";

const API = process.env.REACT_APP_API;
console.log(API);

const client = axios.create({
  baseURL: "https://preonboarding.platdev.net/api/cars",
});

export default client;
