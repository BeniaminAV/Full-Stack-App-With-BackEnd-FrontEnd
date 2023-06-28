import { Albums } from "../data/albums"
import { Request, Response } from "express"

export const All_Albums = (req: Request, res: Response) => {
  res.json(Albums)
}
