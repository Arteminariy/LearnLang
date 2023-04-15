import IModule from "./IModule"

export default interface ILanguage {
    id: number
    title: string
    modules: IModule[]
}