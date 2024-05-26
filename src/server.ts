import express from "express";
import router from './router';

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello from server" });
});

app.use('/api', router)

export default app;
