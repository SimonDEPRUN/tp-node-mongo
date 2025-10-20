import { Router } from "express";
import Etudiant from "../models/Etudiant.js";
const router = Router();


router.post("/", async (req, res) => {
    try {
        const etudiant = new Etudiant(req.body);
        const savedEtudiant = await etudiant.save();
        res.status(201).json(savedEtudiant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
});


router.get("/:id", async (req, res) => {
    try {
        const etudiant = await Etudiant.findById(req.params.id);
        if (!etudiant) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(etudiant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.put("/:id", async (req, res) => {
    try {
        const etudiant = await Etudiant.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!etudiant) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(etudiant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const etudiant = await Etudiant.findByIdAndDelete(req.params.id);
        if (!etudiant) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json({ message: "Utilisateur supprimé" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;