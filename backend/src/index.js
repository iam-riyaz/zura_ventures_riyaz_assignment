import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import { loginRoute } from "./routes/login.route.js";
import cors from "cors"
import { projectRoute } from "./routes/project.route.js";
import { User } from "./models/user.schema.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
  try {
    

    res.status(200).send("route si wokring");
  } catch {
    res.status(404).send("route is not working");
  }
});

app.use("/login", loginRoute);

app.use("/projects",projectRoute )

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
