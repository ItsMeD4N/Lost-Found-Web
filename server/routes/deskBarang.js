const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Halaman pencarian barang ?");
});

router.get("/:idBarang", (req, res) => {
  res.send(`Deskripsi barang ${req.params.idBarang}`);
  console.log("Halaman Deskripsi Barang dengan id");
  console.log(req.Barang);
});

router
  .route("/:idbarang/pengambilan_barang")
  .get((req, res) => {
    res.send("Halaman pengambilan barang di sini");
    console.log("Halaman pengambilan barang");
  })
  .delete((req, res) => {
    res.send(
      "Fitur ini diperlukan setiap kali terjadi pengambilan barang dan berhasil diambil dari loker."
    );
  });

router.param("idBarang", (req, res, next, idBarang) => {
  req.Barang = daftarBarang[idBarang];
});

module.exports = router;
