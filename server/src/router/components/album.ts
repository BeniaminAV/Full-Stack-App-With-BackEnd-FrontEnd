import express from "express"
import { All_Albums } from "../../controllers/albumControllers"

export default (router: express.Router) => {
  router.get("/albums", All_Albums)
}
