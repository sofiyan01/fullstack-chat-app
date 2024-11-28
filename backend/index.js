import express from "express";
import dotenv from "dotenv";
import { DBconnect } from "./lib/DBconnect.js";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { app, server } from "./lib/socket.js";
dotenv.config();

//cKDWjxEXh3moV9zP

//Database Connection
DBconnect();

//port declaration
const PORT = process.env.PORT;
const _dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"));
  });
}

// listen Port
server.listen(PORT, () => {
  console.log(`server is Running on http://localhost:${PORT}`);
});
