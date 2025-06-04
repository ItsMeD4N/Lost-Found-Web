const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient("", "");

router.post("/", async (req, res) => {
  const { barang_id, nama_pengambil, nim_pengambil, keterangan } = req.body;

  if (!barang_id || !nama_pengambil || !nim_pengambil || !keterangan) {
    console.log("Data tidak lengkap:", req.body);
    return res.status(400).json({ error: "Semua field harus diisi" });
  }

  console.log("Data pengambilan:", {
    barang_id,
    nama_pengambil,
    nim_pengambil,
    keterangan,
  });

  const { data, error } = await supabase
    .from("pengambilan")
    .insert([{ barang_id, nama_pengambil, nim_pengambil, keterangan }]);

  if (error) {
    console.error("Gagal insert pengambilan:", error);
    return res.status(500).json({ error: error.message });
  }

  console.log("Insert pengambilan berhasil:", data);

  console.log(`Mencoba hapus barang dengan id=${barang_id}`);
  const { data: deletedData, error: deleteError } = await supabase
    .from("prd_db")
    .delete()
    .eq("id", barang_id);

  if (deleteError) {
    console.error("Gagal hapus barang:", deleteError);
    return res.status(500).json({ error: deleteError.message });
  }

  if (deletedData && deletedData.length > 0) {
    console.log(`Barang dengan id=${barang_id} berhasil dihapus dari prd_db`);
  } else {
    console.warn(
      `Tidak ada barang dengan id=${barang_id} ditemukan di prd_db untuk dihapus`
    );
  }

  res
    .status(201)
    .json({ message: "Pengambilan berhasil dan barang dihapus", data });
});

module.exports = router;
