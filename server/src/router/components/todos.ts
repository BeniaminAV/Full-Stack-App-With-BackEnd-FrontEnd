import { All_Todos } from "../../controllers/todoControllers"
import express from "express"

export default (router: express.Router) => {
  router.get("/todos", All_Todos)
}
