import { Posts } from "../data/posts"
import { Request, Response } from "express"

export const All_Posts = (req: Request, res: Response) => {
  res.json(Posts)
}
