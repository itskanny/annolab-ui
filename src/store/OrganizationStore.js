import {makeAutoObservable} from "mobx";


class OrganizationStore{
    _id = null
    _name = null
    _tagline = null
    _avatar = null
    _owner = null

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    constructor() {
        makeAutoObservable(this)
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get tagline() {
        return this._tagline;
    }

    set tagline(value) {
        this._tagline = value;
    }

    get avatar() {
        return this._avatar;
    }

    set avatar(value) {
        this._avatar = value;
    }

    get owner() {
        return this._owner;
    }

    set owner(value) {
        this._owner = value;
    }

    get getOrganization(){
        return {
            name: this.name,
            id: this.id,
            taline: this.tagline,
            avatar: this.avatar,
            owner: this.owner
        }
    }

    setOrganization(org){
        this.name = org.name
        this.id = org.id
        this.tagline = org.tagline
        this.avatar = org.avatar
        this.owner = org.owner
    }
}

class ShouldSendOrg{
    _sendOrg = false
    constructor() {
        makeAutoObservable(this)
    }

    get sendOrg() {
        return this._sendOrg;
    }

    set sendOrg(value) {
        this._sendOrg = value;
    }
}

export const organizationStore = new OrganizationStore()
export const shouldSendOrg = new ShouldSendOrg()