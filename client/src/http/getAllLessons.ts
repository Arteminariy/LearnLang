import { ILesson } from "@/@types"
import axios from "axios"

export const getAllLessons = async () => {
    const res = await axios.get<ILesson[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/lessons/` || `http://localhost:4200/lessons/`)
    return res.data
}