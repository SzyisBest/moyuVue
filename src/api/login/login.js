import {get,post} from '@/api/axios.config'


export const api = {
    getToken: function getToken (data) {
        let url = '/login'
        return post(url,JSON.stringify(data))
    },
    getToken2: function getToken (data) {
        let url = '/menuList'
        return get(url,data)
    }
}



export default api;