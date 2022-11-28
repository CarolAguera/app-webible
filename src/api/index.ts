import axios from "axios";
import { env } from "../config";

const AxiosApi = axios.create({
  baseURL: env.baseUrl,
  headers: {
    Authorization: `Bearer ${env.token}`,
  },
});

export default AxiosApi;
