import express from "express";
import mongoose from "mongoose";

import postsRouter from "./postsRouter.js";

const PORT = 3000;
const DB_URL = "mongodb+srv://admin:admin@cluster0.7zo9sga.mongodb.net/";

const app = express();

app.use(express.json());
app.use("/plain-server", postsRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
