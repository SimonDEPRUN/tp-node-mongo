import { Schema, model } from "mongoose";

const etudiantSchema = new Schema({
    prenom: { type: String, require: true },
    nom: { type: String, require: true },
    mail: { type: String, require: true, unique: true },
    notes: { type: Array, require: true },
    matieres: { type: Array, require: true },
}, { timestamps: true })
export default model("Etudiant", etudiantSchema);