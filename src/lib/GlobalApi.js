// const { default: axios } = require("axios")
import axios from "axios";

// const apiKey = process.env.STRAPI_TOKEN
const apiKey = "03da6ff3b93c68615fcf061fa85e388aa5ccd8f938cf0840801a9534d85ed0cae0a9c84f88ad54c6ec8a32f8ac2eed23234fb61c97c073323950a5c98203c024a57b2b3c7828af84ea2450a1eb95616c11f525520714d71f4cdaa09d97e8b93486f461d9dadb92833fc4558e6a242702d489de61801b6c264e2f84274a7ead08"

const apiUrl = 'http://localhost:1337/api'


const axiosClient  = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization:`Bearer ${apiKey}`
       
    }
})



const GetLatestProducts=() => axiosClient.get('/products');

export default {
    GetLatestProducts
}