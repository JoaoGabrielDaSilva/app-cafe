import axios from "axios";

export const api = axios.create();

api.interceptors.request.use((config) => {
  console.log("API", {
    headers: config.headers,
    params: config.params,
    url: config.url,
  });

  return config;
});
