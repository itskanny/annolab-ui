import axios from "axios";
import {authStore} from "../store/AuthStore";
import {shouldSendOrg} from "../store/OrganizationStore";

export const apiHelper =axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})



export const apiAuthorizedHelper =axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

apiAuthorizedHelper.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `token ${authStore.token}`
    if (shouldSendOrg.sendOrg && authStore.user.organization.id){
        config.headers['Organization'] = `${authStore.user.organization.id}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});