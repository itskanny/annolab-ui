import Form from "../utils/form";


export class OrganizationProvider {

    static create(data) {
        const formData = new Form(data)
        return formData.post('organizations/')
                .then((response) => {
                    console.log(response)
                    return {
                        data: response,
                        hasErrors: false,
                        status: response.status,
                        statusText: response.statusTexts
                    }
                })
                .catch((error) => {
                    // console.log(error)
                    if (error.response.data.owner){
                        error.response.data.non_field_errors = ["User already has an organization"]
                    }
                    return {
                        data: error.response.data,
                        hasErrors: true,
                        status: error.response.status,
                        statusText: error.response.statusText
                    }
                })
        // return apiAuthorizedHelper
        //     .post('organizations/', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     })
        //     .then((response) => {
        //         return {
        //             data: response.data,
        //             hasErrors: false,
        //             status: response.status,
        //             statusText: response.statusText
        //         }
        //     })
        //     .catch((error) => {
        //         // console.log(error)
        //         return {
        //             data: error.response.data,
        //             hasErrors: true,
        //             status: error.response.status,
        //             statusText: error.response.statusText
        //         }
        //     })
    }

    static fetchOrganization(){
        const form = new Form()
        return form.get('organizations/')
            .then((response) => {

                return {
                    data: response.length? response[0] : null,
                    hasErrors: false,
                    status: response.status,
                    statusText: response.statusText
                }
            })
            .catch((error) => {
                return {
                    data: error.response.data,
                    hasErrors: true,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })
    }
}