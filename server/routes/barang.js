const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");
const axios = require("axios");

const supabase = createClient("", "");

const ESP32_IP = "";

router.post("/", async (req, res) => {
  try {
    console.log("Menerima POST data dari frontend:", req.body);
    const { nama, nim, barang, deskripsi, lokasi, image_url } = req.body;

    const { data, error } = await supabase
      .from("prd_db")
      .insert([{ nama, nim, barang, deskripsi, lokasi, image_url }])
      .select();

    if (error) {
      console.error("Insert error ke Supabase:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log("Data berhasil disimpan ke Supabase:", data);

    try {
      const espResponse = await axios.get(`${ESP32_IP}/open`);
      console.log("ESP32 response (/open):", espResponse.data);
    } catch (espError) {
      console.error("Gagal menghubungi ESP32:", espError.message);
    }

    res.status(201).json(data[0]);
  } catch (err) {
    console.error("Server error saat proses POST:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/close", async (req, res) => {
  console.log("Menerima request /close dari frontend");
  try {
    const espResponse = await axios.get(`${ESP32_IP}/close`);
    console.log("ESP32 response (/close):", espResponse.data);
    res.status(200).json({ message: "Brankas terkunci" });
  } catch (err) {
    console.error("Gagal menghubungi ESP32:", err.message);
    res.status(500).json({ error: "Gagal menutup brankas" });
  }
});

module.exports = router;
