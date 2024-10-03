import express, { json } from "express";
// import authRoutes from "@./routes/auth.route.ts";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

import messageRoutes from "./routes/messageRoute.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(json()); // for parsing the json data
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to backend 2");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Todo: Add socket.io to the server
// Todo: configure this server for the deployment
