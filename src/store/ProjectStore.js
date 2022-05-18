import {makeAutoObservable} from "mobx";
import {ProjectProvider} from "../providers/ProjectProvider";

class ProjectStore{
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

    get isProjectSet() {
        return this._isProjectSet;
    }

    set isProjectSet(value) {
        this._isProjectSet = value;
    }
    _id = null
    _name = null
    _description = null
    _avatar = null
    _organization = null
    _isProjectSet = false


    constructor() {
        makeAutoObservable(this)
    }

    setProject(project){
        this.id = project.id
        this.name = project.name
        this.description = project.description
        this.avatar = project.avatar
        this.organization = project.organization

        this.setIsProjectSet(true)
    }

    setIsProjectSet(value){
        this.isProjectSet = value
    }

    get getProject(){
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            avatar: this.avatar,
            organization: this.organization,
            isProjectSet: this.isProjectSet,
        }
    }

    create(project){
        return ProjectProvider.create(project)
            .then(data => {
                if (!data.hasErrors){
                    this.setProject(data.data)
                }
                return data
            })
    }
}

export const projectStore = new ProjectStore()