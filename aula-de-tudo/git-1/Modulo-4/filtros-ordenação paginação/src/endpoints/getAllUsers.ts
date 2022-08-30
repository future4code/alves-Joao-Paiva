import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request,res: Response) => {

   const nome = req.query.nome
   let sort = req.query.sort
   let order = req.query.order as string

   try {
      
      const data = await connection('aula49_exercicio')
      .select("*")
      .where('name','LIKE',`%${nome}%`)

      if(!nome){
         throw new Error(`Nao foi possivel localizar nome`)
      }
      
      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

}