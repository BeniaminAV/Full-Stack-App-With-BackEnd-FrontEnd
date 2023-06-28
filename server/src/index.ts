import express from "express"
import router from "./router"

const cors = require("cors")
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Server is Live !")
})

app.listen(5000, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})

app.use("/", router())
