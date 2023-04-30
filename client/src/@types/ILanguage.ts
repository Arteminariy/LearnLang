import { IModule } from "./";

export type ILanguage = {
    id: number;

	title: string;

	modules: IModule[];
}