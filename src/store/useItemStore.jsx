import { create } from "zustand";
import { api } from "../api/api";

export const useItemStore = create((set) => ({
items: [],
getItem: async () => {
    try{
const res = await api.getItems()
set({items: res.data})
    } catch (error) {
        console.error(error)
    }

}

}))