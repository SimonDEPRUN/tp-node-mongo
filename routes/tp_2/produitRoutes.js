import { Router } from "express";
import Produit from "../models/Produit.js";
const router = Router();


router.post("/", async (req, res) => {
    try {
        const produit = new Produit(req.body);
        const savedProduit = await produit.save();
        res.status(201).json(savedProduit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    const produits = await Produit.find();
    res.json(produits);
});


router.get("/:id", async (req, res) => {
    try {
        const produit = await Produit.findById(req.params.id);
        if (!produit) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(produit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

router.put("/:id", async (req, res) => {
    try {
        const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!produit) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json(produit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const produit = await Produit.findByIdAndDelete(req.params.id);
        if (!produit) return res.status(404).json({ error: "Utilisateur non trouvé" });
        res.json({ message: "Utilisateur supprimé" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;