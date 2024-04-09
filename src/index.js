import db from "./db/db.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000

// database
db()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is runnin at http://localhost:${port}`)
    })
})
.catch((err)=>{
    console.log("Database connection error", err.message)
})

