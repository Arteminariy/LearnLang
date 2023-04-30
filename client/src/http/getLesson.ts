import { ILesson } from "@/@types"
import axios from "axios"

export const getLesson = async (id: number) => {
    const res = await axios.get<ILesson>(`${process.env.NEXT_PUBLIC_SERVER_API}/lessons/${id}` || `http://localhost:4200/lessons/${id}`)
    return res.data
}