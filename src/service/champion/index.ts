import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application-json",
  },
});

export default {
  //Items
  getItems() {
    return apiClient.get("/items");
  },
  getChampions() {
    return apiClient.get("/champions");
  },
  getTrait() {
    return apiClient.get("/traits");
  },
};
