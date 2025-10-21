import { Router } from "express";
import TGV from "../models/TGV.js";
import Billet from "../models/Billet.js";
const router = Router();

router.post("/", async (req, res) => {
    try {
        const tgv = new TGV(req.body);
        const savedTGV = await tgv.save();
        res.status(201).json(savedTGV);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})
router.get("/", async (req, res) => {
    const tgvs = await TGV.find();
    res.json(tgvs);
})

router.get("/:id", async (req, res) => {
    try {
        const tgv = await TGV.findById(req.params.id);
        if (!tgv) return res.status(404).json({ error: "TGV non trouvé" });
        res.json(tgv)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})
router.put("/:id", async (req, res) => {
    try {
        const tgv = await TGV.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tgv) return res.status(404).json({ error: "TGV non trouvé" });
        res.json(tgv)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})
router.delete("/:id", async (req, res) => {
    try {

        const tgv = await TGV.findByIdAndDelete(req.params.id);
        if (!tgv) return res.status(404).json({ error: "TGV non trouvé" });
        res.json({ message: "TGV Annulé" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

export default router;