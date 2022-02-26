import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": '1949d371-7c7d-4f52-86db-f94c98790b76'}
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => {
                return response.data;
            })
    }
};

export const getProfile = (userId: string) => {
    return  instance.get( `profile/${userId}`)
}

export const getUsersPost = (id: number) => {
    return instance.post( `follow/${id}`, {})
}

export const getUsersDelete = (id: number) => {
    return instance.delete(`follow/${id}`)
}