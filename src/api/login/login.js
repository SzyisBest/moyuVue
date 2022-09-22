import {get,post} from '@/api/axios.config'


export const api = {
    getToken: function getToken (data) {
        let url = '/token'
        return post(url,JSON.stringify(data))
    },
    login: function login (data) {
        let url = '/login'
        return post(url,JSON.stringify(data))
    }
}



export default api;