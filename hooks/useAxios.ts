import axios from "axios"

export const useAxios = axios.create({
    baseURL: "https://opentdb.com/",
});