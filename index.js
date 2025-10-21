import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import tgvRoutes from "./routes/tgvRoutes.js"
import billetRoutes from "./routes/billetRoutes.js"

const app = express();
app.use(express.json());

app.use("/tgvs", tgvRoutes);
app.use("/billets", billetRoutes);
// app.use("/users", userRoutes);
// app.use("/produits", produitRoutes);
// app.use("/etudiants", etudiantRoutes);
app.use(cors());
connect("mongodb://127.0.0.1:27017/TP_3")
    .then(() => console.log("connecté à MongoDB"))
    .catch(err => console.error("Erreur MongoDB : ", err));

app.get("/", (req, res) => res.send("API MongoDB en Node.js"));
app.listen(3000, () => console.log("Serveur lancé sur http://localhost:3000"));