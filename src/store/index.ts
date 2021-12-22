import { defineStore } from "pinia";
import { Champion } from "@/types/champion";

export default defineStore({
  id: "mainStore",
  state: () => ({
    items: [],
    champions: [] as Champion[],
  }),
  getters: {},
  actions: {},
});
