import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("", "");

const Ambil = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [barang, setBarang] = useState(state?.barang || null);
  const [namaPengambil, setNamaPengambil] = useState("");
  const [nimPengambil, setNimPengambil] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const pernyataan = `Saya merupakan pemilik barang ini. Jika pada kemudian hari ditemukan bahwa barang ini bukan milik saya, maka saya akan menerima segala konsekuensi yang akan diberikan.`;

  useEffect(() => {
    const fetchBarang = async () => {
      if (!barang) {
        const { data, error } = await supabase
          .from("")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          alert("Gagal mengambil data barang.");
          navigate("/listbarang");
        } else {
          setBarang(data);
        }
      }
    };
    fetchBarang();
  }, [barang, id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keterangan.trim() !== pernyataan) {
      setErrorMsg("Isi pernyataan harus persis seperti yang ditentukan.");
      return;
    }
    setErrorMsg("");
    navigate("/uploadktm");
    fetch("http://localhost:3000/api/pengambilan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        barang_id: parseInt(id),
        nama_pengambil: namaPengambil,
        nim_pengambil: nimPengambil,
        keterangan,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Pengambilan berhasil!");
        } else {
          console.warn("Gagal input pengambilan.");
        }
      })
      .catch(() => {
        console.warn("Terjadi error saat mengirim data.");
      });
  };

  if (!barang) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Memuat data barang...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg space-y-4 text-black"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          Form Pengambilan Barang
        </h1>
        <p>
          <strong>Nama Barang:</strong> {barang.barang}
        </p>
        <p>
          <strong>Deskripsi:</strong> {barang.deskripsi}
        </p>
        <p>
          <strong>Lokasi:</strong> {barang.lokasi}
        </p>

        <div className="mt-4">
          <label className="block mb-2 font-semibold">Nama Pengambil</label>
          <input
            placeholder="Nama Pengambil"
            value={namaPengambil}
            onChange={(e) => setNamaPengambil(e.target.value)}
            className="input input-bordered w-full bg-blue-50 text-black"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-semibold">NIM Pengambil</label>
          <input
            placeholder="NIM Pengambil"
            value={nimPengambil}
            onChange={(e) => setNimPengambil(e.target.value)}
            className="input input-bordered w-full bg-blue-50 text-black"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-semibold">
            Pernyataan Kejujuran
          </label>
          <p className="mb-2 text-sm">{pernyataan}</p>
          <textarea
            placeholder="Tuliskan Pernyataan Kejujuran di atas dengan benar"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            className="textarea textarea-bordered w-full bg-blue-50 text-black"
            rows="3"
            required
          />
        </div>

        {errorMsg && <p className="text-red-600">{errorMsg}</p>}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-lg mt-4"
        >
          Ambil Barang
        </button>
      </form>
    </div>
  );
};

export default Ambil;
