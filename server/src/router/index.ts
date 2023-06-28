import express from "express"
import post from "./components/post"
import comment from "./components/comment"
import album from "./components/album"
import photo from "./components/photo"
import todos from "./components/todos"
import user from "./components/user"

const router = express.Router()

export default (): express.Router => {
  post(router)
  comment(router)
  album(router)
  photo(router)
  todos(router)
  user(router)
  return router
}
