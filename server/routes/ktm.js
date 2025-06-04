const express = require("express");
const router = express.Router();
const axios = require("axios");

const ESP32_IP = "";

router.get("/capture", async (req, res) => {
  try {
    const espResponse = await axios.get(`${ESP32_IP}/capture`);
    res.status(200).json(espResponse.data);
  } catch (err) {
    console.error("Gagal ambil foto dari ESP32:", err.message);
    res.status(500).json({ error: "Gagal ambil foto dari ESP32" });
  }
});

module.exports = router;
