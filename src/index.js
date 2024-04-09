import db from "./db/db.js";
import express from "express"
const app = express()
const port = process.env.PORT || 8000

db()


app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})
