import * as axios from "axios";
import React from 'react';
const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
         "API_KEY": "2206b1e9-b69a-4a8d-b96c-be2ccfcb4896",
    }
});
export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
            withCredentials: true,
        }).then(response => {
            return response.data;
        });
    }
}

export const getUsers2 = (currentPage = 1,pageSize = 5) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`,{
                withCredentials: true,
            }).then(response => {
            return response.data;
            });
}

