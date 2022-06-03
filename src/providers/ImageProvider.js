import Form from "../utils/form";


export class ImageProvider{

    static fetchImages(projectId){
        const form = new Form()

        return form.get(`projects/${projectId}/images`)
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

    static deleteImage(projectId,imgId){
        const form = new Form()

        return form.delete(`projects/${projectId}/images/${imgId}/`)
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

    static editImage(projectId,imgId, data){
        const form = new Form(data)

        return form.patch(`projects/${projectId}/images/${imgId}/`)
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

    static checkImageExists(projId, imageId){
        const form = new Form()
        return form.get(`projects/${projId}/images/${imageId}/`)
            .then((response) => {

                return {
                    data: response,
                    hasErrors: false,
                    exists: true,
                    status: response.status,
                    statusText: response.statusText
                }
            })
            .catch((error) => {
                return {
                    data: error.response.data,
                    hasErrors: true,
                    exists: false,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })
    }
}