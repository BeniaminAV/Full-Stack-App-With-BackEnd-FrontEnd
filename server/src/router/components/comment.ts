import { All_Comments } from "../../controllers/commentController"
import express from "express"

export default (router: express.Router) => {
  router.get("/comments", All_Comments)
}
