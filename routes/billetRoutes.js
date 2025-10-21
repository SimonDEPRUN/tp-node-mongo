import { Router } from "express";
import Billet from "../models/Billet.js";
import TGV from "../models/TGV.js";
const router = Router();

router.post("/", async (req, res) => {
    try {
        const billet = new Billet(req.body);
        const tgv = TGV.findById(req.body.tgv);
        if (billet.tgv && tgv) {
            const savedBillet = await billet.save();
            res.status(201).json(savedBillet);
        } else {
            return res.status().json({ error: "Le train demandé n'existe pas" })
        }
    } catch {
        res.status(400).json({ error: err.message });
    }
});
router.get("/", async (req, res) => {
    const billets = await Billet.find();
    res.json(billets)
});
router.get("/:id", async (req, res) => {
    try {
        const billet = await Billet.findById(req.params.id);
        if (!billet) return res.status(404).json({ error: "Billet non trouvé" });
        res.json(billet);
    } catch {
        res.status(400).json({ error: err.message });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const billet = await Billet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!billet) return res.status(404).json({ error: "Billet non trouvé" });
        res.json(billet)
    } catch {
        res.status(400).json({ error: err.message });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const billet = await Billet.findByIdAndDelete(req.params.id)
        if (!billet) return res.status(404).json({ error: "Billet non trouvé" });
        res.json({ message: "Voyage annulé" });
    } catch {
        res.status(400).json({ error: err.message });
    }
});

export default router;