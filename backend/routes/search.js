const express = require('express');
const { kmpSearch } = require('../utils/kmpAlgorithm');
const router = express.Router();

router.post('/search', (req, res) => {
    const { text, pattern } = req.body;
    if (!text || !pattern) {
        return res.status(400).json({ error: "Text and Pattern are required" });
    }
    
    const result = kmpSearch(text, pattern);
    
    res.json({
        matches: result.length > 0 ? result : "No match found",
    });
});

module.exports = router;
