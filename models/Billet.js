import { Schema, model } from "mongoose";

const billetSchema = new Schema({
    tgv: { type: Schema.Types.ObjectId, ref: "TGV", required: true },
    passagerNom: { type: String, required: true },
    classe: { type: String, enum: ["Seconde", "Première"], default: "Seconde" },
    prix: { type: Number, min: [0, "le prix doit être positif"] },
    place: { type: String },
    dateAchat: { type: Date, default: Date.now },
}, { timestamps: true });

export default model("Billet", billetSchema);