import { All_Users } from "../../controllers/userControllers"
import express from "express"

export default (router: express.Router) => {
  router.get("/users", All_Users)
}
