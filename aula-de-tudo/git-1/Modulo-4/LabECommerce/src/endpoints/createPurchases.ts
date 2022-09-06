import { Request, Response } from "express";
import selectUser from "../data/selectUser";

export default async function createPurchases(req:Request, res:Response) {
    try {

        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new  Error("Os valores de UserId, productId e quantity devem ser localizados")
        }

        const userAlreadyExist = await selectUser

    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}