import Form from "../utils/form";


export class ProjectProvider{
    static create(data){
        const formData = new Form(data)
        return formData.post('projects/')
            .then((response) => {
                console.log(response)
                return {
                    data: response,
                    hasErrors: false,
                    status: response.status,
                    statusText: response.statusText
                }
            })
            .catch((error) => {
                // console.log(error)
                if (error.response.data.organization){
                    error.response.data.non_field_errors = ["No organization has been created"]
                }
                return {
                    data: error.response.data,
                    hasErrors: true,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })
    }

    static fetchProjects(orgId){
        const form = new Form()

        return form.get('projects/')
            .then(data => {
                return {
                    data: data,
                    hasErrors: false,
                    status: data.status,
                    statusText: data.statusText
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