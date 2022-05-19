import moment from "moment";


export const formatDate = (timestamp, format) =>{
    return moment(new Date(timestamp)).format(format)
}