import axios from "axios";
import API_URL from "./url";

const client = axios.create({
  baseURL: API_URL,
});

export default client;
