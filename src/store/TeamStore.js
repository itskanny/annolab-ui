import {makeAutoObservable} from "mobx";
import {TeamProvider} from "../providers/TeamProvider";

class TeamStore{
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get avatar() {
        return this._avatar;
    }

    set avatar(value) {
        this._avatar = value;
    }

    get organization() {
        return this._organization;
    }

    set organization(value) {
        this._organization = value;
    }

    get isTeamSet() {
        return this._isTeamSet;
    }

    set isTeamSet(value) {
        this._isTeamSet = value;
    }
    _id = null
    _name = null
    _description = null
    _avatar = null
    _organization = null
    _isTeamSet = false


    constructor() {
        makeAutoObservable(this)
    }

    setTeam(team){
        this.id = team.id
        this.name = team.name
        this.description = team.description
        this.avatar = team.avatar
        this.organization = team.organization

        this.setIsTeamSet(true)
    }

    setIsTeamSet(value){
        this.isTeamSet = value
    }

    get getTeam(){
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            avatar: this.avatar,
            organization: this.organization,
            isTeamSet: this.isTeamSet,
        }
    }

    create(team){
        return TeamProvider.create(team)
            .then(data => {
                if (!data.hasErrors){
                    this.setTeam(data.data)
                }
                return data
            })
    }
}

export const teamStore = new TeamStore()