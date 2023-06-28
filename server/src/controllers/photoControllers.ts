import { Photos } from "../data/photos"
import { Request, Response } from "express"

export const All_Photos = (req: Request, res: Response) => {
  return res.json(Photos)
}
