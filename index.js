import express from "express"
import cors from "cors"
import GuestRoute from "./routes/GuestRoute.js"

const port = 3000
const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())

// Route
router.get('/', function(req, res){
  res.render('src/App')
})

app.use(GuestRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})