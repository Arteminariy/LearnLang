import { IModule } from "@/@types"
import axios from "axios"

export const getModule = async (id: number) => {
    const res = await axios.get<IModule>(`${process.env.NEXT_PUBLIC_SERVER_API}/module/${id}` || `http://localhost:4200/module/${id}`)
    return res.data
}