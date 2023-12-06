import Dotenv from "dotenv";
Dotenv.config()

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import sessions from "express-session";
import apiv1 from ".";
import connectDb from "./db";
import { User } from "./models/userModel";
import { PORT } from "./config";

const app = express();
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use("/v1", apiv1)
app.use(
    sessions({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
        resave: true,
    })
)
app.use((req, res) => {
    return res.status(404).json({ error: "Route not found" })
})

app.use((err, req, res, next) => {
    console.error("Error:", err)
    return res.status(500).json({ error: "Unknown server error" })
})

connectDb()
    .then(async () => {
        const admin = await User.findOne({ username: "admin" })
        if (admin == null) {
            await User.create({ username: "admin", password: "admin", role: "admin" })
        }
        const guest = await User.findOne({ username: "guest" })
        if (guest == null) {
            await User.create({ username: "guest", password: "guest", role: "guest" })
        }
    })
    .then(() => {
        app.listen(8080, () => console.log("Server is listening on http://localhost:8080"))
    })
    .catch((err) => {
        console.error("Failed to connect to database", err)
        process.exit(1)
    })