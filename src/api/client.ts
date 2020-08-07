import axios from "axios";
import API_URL from "./url";

const client = axios.create({
  baseURL: API_URL,
});

export function getNetworkError(e: any) {
  if (e.response.data && e.response.data.message) {
    return e.response.data;
  }
  return e;
}
export default client;
