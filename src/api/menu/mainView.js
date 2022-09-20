import {get,post} from '@/api/axios.config'


export const api = {
    LoadMenuList2: function LoadMenuList2 (data) {
        let url = '/menuList'
        return post(url,JSON.stringify(data))
    },
    LoadMenuList: function LoadMenuList (data) {
        let url = '/menuList'
        return get(url,data)
    }
}



export default api;