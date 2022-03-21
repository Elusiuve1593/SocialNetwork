import axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {"API-KEY": "94628c20-c330-4c24-82e5-5b09aa1c5b50"},
    }
)

export function getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export function deleteUsers(id: string | number) {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}

export function postUsers(id: string | number) {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export function getContent(userId: string) {
    return instance.get(`profile/` + userId)
        .then(response => response.data)
}
