import axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {"API-KEY": "94628c20-c330-4c24-82e5-5b09aa1c5b50"},
    }
)

export const api = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteUsers(id: string | number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    postUsers(id: string | number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getContent(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    authStatus() {
        return instance.get(`auth/me`)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}