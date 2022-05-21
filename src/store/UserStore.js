import {action, makeAutoObservable, observable} from "mobx";
import {UserProvider} from "../providers/UserProvider";
import {organizationStore} from "./OrganizationStore";
import {OrganizationProvider} from "../providers/OrganizationProvider";


export class UserStore{
    email="";
    name="";
    id="";
    username="";
    date_of_birth=null;
    avatar=null;
    loading=false
    organization

    constructor() {
        makeAutoObservable( this, {
            email: observable,
            name: observable,
            id: observable,
            date_of_birth: observable,
            avatar: observable,
            login: action,
            loading: observable,
            setName: action,
            setAvatar: action,
            setUsername: action,
            setLoading: action,
            setId: action,
            setEmail: action,
            setDateOfBirth: action,

        })
        this.organization = organizationStore
    }


    get getEmail() {
        return this.email;
    }

    get getName() {
        return this.name
    }

    get getAvatar(){
        return this.avatar
    }

    get getDateOfBirth(){
        return this.date_of_birth
    }

    get getId() {
        return this.id
    }

    get getUsername(){
        return this.username
    }

    get getUser() {
        return {
            email: this.getEmail,
            name: this.getName,
            id: this.getId,
            username: this.getUsername,
            avatar: this.getAvatar,
            date_of_birth: this.getDateOfBirth
        }
    }

    login(user){
        this.setId(user.id)
        this.setName(user.name)
        this.setEmail(user.email)
        this.setUsername(user.username)
        this.setDate0fBirth(user.date_of_birth)
        this.setAvatar(user.avatar)
    }

    setId(id){
        this.id = id
    }

    setName(name){
        this.name = name
    }

    setEmail(email){
        this.email = email
    }

    setLoading(loading){
        this.loading = loading
    }

    isLoading(){
        return this.loading
    }

    setAvatar(avatar){
        this.avatar = avatar
    }


    partiallyUpdate(values){
        return UserProvider.partialUpdateUsers(values)
            .then(data => {
                if (!data.hasErrors){
                    this.login(data.data)
                }
                return data
            })
    }

    setUsername(username) {
        this.username = username
    }

    setDate0fBirth(date_of_birth) {
        this.date_of_birth = date_of_birth
    }

    getOrganization(){
        return OrganizationProvider.fetchOrganization()
            .then(data => {
                if (!data.hasErrors) {
                    this.organization.setOrganization(data.data ? data.data : {
                        name: null,
                        id: null,
                        tagline: null,
                        avatar: null,
                        owner: null
                    })
                    console.log(this.organization)
                }
                return data
            })
    }

    setOrganization(org){
        this.organization.setOrganization(org)
        console.log(this.organization)
    }
}

export const userStore = new UserStore();