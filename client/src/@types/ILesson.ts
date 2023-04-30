import { ILessonStep } from "./";

export type ILesson = {
    id: number;

	title: string;

	moduleId: number;

	steps: ILessonStep[];
}