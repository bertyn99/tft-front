import apiClient from "../http-common";
export default {
  //Items
  getAllItems(): Promise<unknown> {
    return apiClient.get("/items");
  },
  getAllChampions(): Promise<unknown> {
    return apiClient.get("/champions");
  },
  getAllTrait(): Promise<unknown> {
    return apiClient.get("/traits");
  },
};
