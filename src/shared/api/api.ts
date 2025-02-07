import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://7103.api.greenapi.com'
})