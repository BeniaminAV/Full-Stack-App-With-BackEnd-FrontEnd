import { Comments } from "../data/comments"
import { Request, Response } from "express"

export const All_Comments = (req: Request, res: Response) => {
  res.json(Comments)
}
