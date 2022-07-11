import axiosClient from "./axiosClient"
import {ListResponse,List, ListParams} from '../models'


const postsApi : any = {
    getAllPosts(params : ListParams) : Promise<ListResponse<List>> {
        const url = "/posts"
        return axiosClient.get(url,{params: params})
    },
    addPost(data:List) : Promise<List> {
        const url = "/posts"
        return axiosClient.post(url,data)
    },
    removeList(id:number) : Promise<any> {
        const url = `/posts/${id}`
        return axiosClient.delete(url)
    },
    updatePost(data:List) : Promise<any> {
        const url = `/posts/update`
        return axiosClient.post(url,data)
    },
}

export {postsApi}