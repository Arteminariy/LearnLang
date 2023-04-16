import ILesson from "./ILesson"

export default interface IModule {
    id: number
    title: string
    lessons: ILesson[]
    typeId: number
}