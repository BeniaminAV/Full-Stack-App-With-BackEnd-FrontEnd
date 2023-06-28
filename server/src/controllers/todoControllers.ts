import { Todos } from "../data/todos"
import { Request, Response } from "express"

export const All_Todos = (req: Request, res: Response) => {
  res.json(Todos)
}
