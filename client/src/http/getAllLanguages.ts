import { ILanguage } from "@/@types"
import axios from "axios"

export const getAllLanguages = async () => {
    const res = await axios.get<ILanguage[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/languages/`)
    return res.data
}