import Form from "../utils/form";

export class TeamProvider{
    static create(data){
        const formData = new Form(data)
        return formData.post('teams/')
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

    static fetchTeams(){
        const form = new Form()

        return form.get('teams/')
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

    static checkTeamExists(projId){
        const form = new Form()
        return form.get(`teams/${projId}`)
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

    static editTeam(teamId, data){
        const form = new Form(data)

        return form.patch(`teams/${teamId}/`)
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

    static deleteTeam(teamId){
        const form = new Form()

        return form.delete(`teams/${teamId}/`)
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