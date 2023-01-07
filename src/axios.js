import axios from 'axios'

const instance = axios.create({
    baseURL: "https://whatsappcloene.onrender.com/"
})

export default instance;