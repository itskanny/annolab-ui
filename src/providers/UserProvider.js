import {apiAuthorizedHelper, apiHelper} from "../axios/axios";


export class UserProvider {
    static login(credentials) {
        return apiHelper
            .post("auth/token/login/", credentials)
            .then((response) => {
                // console.log(response.data)
                return {
                    data: response.data,
                    hasErrors: false,
                    status: response.status,
                    statusText: response.statusText
                }
            })
            .catch((error) => {
                // console.log(error)
                return {
                    data: error.response.data,
                    hasErrors: true,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })
    }

    static signup(credentials) {
        return apiHelper
            .post("/auth/users/", credentials)
            .then((response) => {
                return {
                    data: response.data,
                    hasErrors: false,
                    status: response.status,
                    statusText: response.statusText
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    hasErrors: true,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })
    }

    static fetchUser() {
        return apiAuthorizedHelper
            .get("auth/users/me/")
            .then((response) => {
                return {
                    data: response.data,
                    hasErrors: false,
                    status: response.status,
                    statusText: response.statusText
                }
            })
            .catch(error => {
                return {
                    data: error.response.data,
                    hasErrors: true,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            });

    }
}