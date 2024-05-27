import express from "express";
import router from "./router";
import morgan from "morgan";

const app = express();

// Custom logger that takes argument and returns a function
const customLogger = (message) => (req, res, next) => {
  console.log(`Hello from ${message}`);
  next();
};

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger("custom logger"));

// Any single reques that is registered after this middleware is registered will
// have access to req.something_appended
// app.use((req, res, next) => {
//   // Adding something to the request object
//   req.something_appended = "luna";
//   next();
// });

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", router);

export default app;
