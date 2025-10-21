import { Schema, model } from "mongoose";

const produitSchema = new Schema({
    libelle: { type: String, require: true },
    prix: { type: Number, require: true },
    provenance: { type: String, enum: ["France", "Canada"], default: "France" },
    stock: { type: Number },
    actif: { type: Boolean }
}, { timestamps: true })
export default model("Produit", produitSchema);