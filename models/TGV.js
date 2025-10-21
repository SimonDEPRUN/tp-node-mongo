import { Schema, model } from "mongoose";

const tgvSchema = new Schema({
    numero: { type: String, required: true },
    origine: { type: String, required: true },
    destination: { type: String, required: true },
    heureDepart: { type: Date, required: true },
}, { timestamps: true })

export default model("TGV", tgvSchema);