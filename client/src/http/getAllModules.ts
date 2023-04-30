import { IModule } from "@/@types"
import axios from "axios"

export const getAllModules = async () => {
    const res = await axios.get<IModule[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/modules/` || `http://localhost:4200/modules/`)
    return res.data
}