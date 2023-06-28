import { All_Posts } from "../../controllers/postControllers"
import express from "express"

export default (router: express.Router) => {
  router.get("/posts", All_Posts)
}
