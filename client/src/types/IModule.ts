import ILesson from "./ILesson"

export default interface IModule {
    title: string
    lessons: ILesson[]
}