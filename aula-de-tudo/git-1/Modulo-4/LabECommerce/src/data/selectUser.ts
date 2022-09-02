import { userData } from "../types/typesUser";
import { connection } from "./baseDataBase";

export default async function selectUser(userId:string) {

    const result = await connection().select("*").where({id:userId})

    return result

    
}