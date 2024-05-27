import * as dotenv from 'dotenv'
dotenv.config();
import app from "./server";

app.listen("3004", () => {
  console.log("app is running on http://localhost:3004");
});
