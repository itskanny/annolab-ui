import {action, makeAutoObservable, observable} from "mobx";


export class UserStore{
    email="";
    name="";
    id="";
    username="";
    date_of_birth=null;
    avatar=null;

    constructor() {
        makeAutoObservable( this, {
            email: observable,
            name: observable,
            id: observable,
            date_of_birth: observable,
            avatar: observable,
            login: action,
        })
    }


    get getEmail() {
        return this.email;
    }

    get getName() {
        return this.name
    }

    get getId() {
        return this.id
    }

    get getUser() {
        return {
            email: this.email,
            name: this.name,
            id: this.id,
            username: this.username,
            avatar: this.avatar,
            date_of_birth: this.date_of_birth
        }
    }

    login(user){
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.username = user.username
        this.date_of_birth = user.date_of_birth
        this.avatar = user.avatar
    }
}

export const userStore = new UserStore();