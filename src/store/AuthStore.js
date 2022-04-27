import {action, autorun, computed, makeAutoObservable, observable} from "mobx";
import {userStore} from "./UserStore";
import {UserProvider} from "../providers/UserProvider";


class AuthStore{
    token = "";
    LoginRequired = false;
    loading=false
    setup = false
    user
    selectedOrganizationId = null

    constructor() {
        makeAutoObservable(this, {
            token: observable,
            LoginRequired: observable,
            setup: observable,
            isLoggedIn: computed,
            addToken: action,
            removeToken: action,
            loadToken: action,
        });
        this.user = userStore


        autorun(() => {
            this.loadToken();
        });
    }

    loadToken() {
        this.setToken(localStorage.getItem("auth_token"));
        console.log('Loaded Token: ',this.getToken)
    }

    loadUserData(){
        this.user.setLoading(true)
        if (this.isLoggedIn) {
            this.setIsLoginRequired(false)
            this.setLoading(true)
            console.log('LoadingData')
            UserProvider.fetchUser().then(data => {
                this.user.login(data.data)
                this.user.getOrganization().then(data => {
                    this.setSelectedOrganizationId(data.id)
                    console.log("OrgId",this.getSelectedOrganizationId)
                    this.user.setLoading(false)

                })
                this.setLoading(false)

            })
            this.printData()
        }
        else {
            this.setIsLoginRequired(true)
            this.user.login({})
        }
    }

    setIsLoginRequired(value){
        this.LoginRequired = value
    }

    get isLoginRequired(){
        return this.LoginRequired
    }

    get isLoggedIn() {
        return this.token !== null
    }

    get getSetup() {
        return this.setup
    }

    get isLoading(){
        return this.loading
    }

    setSetup(setup){
        this.setup = setup
    }

    addToken(token) {
        this.setToken(token)
        localStorage.setItem("auth_token", token);
        this.loadUserData()
    }

    setAndStoreToken(token){
        this.setToken(token)
        localStorage.setItem("auth_token", token)
    }

    signupUser(user, password){
        this.setLoading(true)
        this.user.setLoading(true)
        return UserProvider.login({
            email: user.email,
            password: password
        }).then(data => {
            if (!data.hasErrors){
                this.setAndStoreToken(data.data.auth_token)
                this.user.login(user)
                this.user.setLoading(false)
                this.setLoading(false)
                return true
            }
            else {
                console.log(data)
                console.log(user, password)
                // this.setLoading(false)
                // this.setIsLoginRequired(true)
                return false
            }
        })
    }

    removeToken() {
        localStorage.removeItem("auth_token");
        this.setToken("")
        window.location.reload()

    }

    setLoading(loading){
        this.loading = loading
    }

    setToken(token){
        this.token = token
    }

    get getToken(){
        return this.token
    }

    setSelectedOrganizationId(id){
        this.selectedOrganizationId = id
    }

    get getSelectedOrganizationId(){
        return this.selectedOrganizationId
    }

    printData(){
        console.log(this.token,
            this.user
        )
    }
}

export const authStore = new AuthStore()