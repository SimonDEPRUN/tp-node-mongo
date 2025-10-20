import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes"

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use(cors())