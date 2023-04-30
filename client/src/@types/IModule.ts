import { ILesson } from "./";

export type IModule = {
    id: number;

	title: string;

	languageId: number;

	typeId: number;

	lessons: ILesson[];
}