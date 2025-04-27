import db from "./db/db.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

// database
db()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });