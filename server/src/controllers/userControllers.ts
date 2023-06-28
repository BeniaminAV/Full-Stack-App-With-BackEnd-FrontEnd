import { Users } from "../data/users"
import { Request, Response } from "express"

export const All_Users = (req: Request, res: Response) => {
  res.json(Users)
}
