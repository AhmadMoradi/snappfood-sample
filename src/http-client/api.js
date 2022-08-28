import axios from "axios";

import { BASE_URL } from "~/config";

const Api = axios.create({
  baseURL: BASE_URL,
});

export default Api;
