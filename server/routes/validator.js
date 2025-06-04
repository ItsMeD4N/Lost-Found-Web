const express = require("express");
const router = express.Router();
const axios = require("axios");

const ESP32_IP = "";

// Kirim kode validasi ke ESP32
router.post("/sendcode", async (req, res) => {
  const { code } = req.body;
  try {
    await axios.post(`${ESP32_IP}/setcode`, { code });
    res.json({ success: true });
  } catch {
    res.json({ error: "Gagal kirim kode ke ESP32" });
  }
});

module.exports = router;
