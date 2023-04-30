import { ILanguage } from "@/@types"
import axios from "axios"

export const getLanguage = async (id: number) => {
    const res = await axios.get<ILanguage>(`${process.env.NEXT_PUBLIC_SERVER_API}/languages/${id}` || `http://localhost:4200/languages/${id}`)
    return res.data
}