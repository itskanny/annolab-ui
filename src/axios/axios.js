import axios from "axios";
import {authStore} from "../store/AuthStore";

export const apiHelper =axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})



export const apiAuthorizedHelper =axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

apiAuthorizedHelper.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `token ${authStore.token}`
    // console.log("Adding: ", authStore.user.organization.id)
    // if (authStore.user.organization.id){
    //     config.headers['Organization'] = `${authStore.user.organization.id}`
    // }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});