import axios from "axios";

export const $api = axios.create({
    baseURL: "http://13.39.20.162/api/v1/"
});
