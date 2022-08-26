const axios = require("axios");
import { store } from "../store";
import { BASE_URL } from "../utils/constants";

const apiClient = axios.create({
    baseURL:  BASE_URL
});


// Request interceptor for API calls
apiClient.interceptors.request.use(
  async (config) => {
    const value = await redisClient.get(rediskey);
    const keys = JSON.parse(value);
    config.headers = {
      'Authorization': `Bearer ${store.getState().auth.accessToken}`,
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      axios.default.headers.common["Authorization"] = "Bearer " + access_token;
      return apiClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default apiClient;