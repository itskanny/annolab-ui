import Form from "../utils/form";

export class AnnotationProvider {

    static  fetchAnnotations(imgId){
        const form = new Form()

        return form.get(`annotations/?image=${imgId}`)
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

    static create(data) {
        const formData = new Form(data)
        return formData.post('annotations/')
            .then((response) => {
                return {
                    data: response,
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

    static deleteAnnotation(id) {
        const form = new Form()

        return form.delete(`annotations/${id}/`)
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