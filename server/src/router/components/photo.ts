import express from "express"
import { All_Photos } from "../../controllers/photoControllers"

export default (router: express.Router) => {
  router.get("/photo", All_Photos)
}
