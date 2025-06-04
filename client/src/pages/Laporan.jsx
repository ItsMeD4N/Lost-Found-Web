import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("", "");

const LaporanPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    barang: "",
    deskripsi: "",
    lokasi: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imageUrl = "";

    if (formData.file) {
      const fileName = `${Date.now()}_${formData.file.name}`;
      const { data, error } = await supabase.storage
        .from("webprd")
        .upload(fileName, formData.file);
      if (error) {
        alert("Upload error: " + error.message);
        setLoading(false);
        return;
      }
      imageUrl = fileName;
    }

    try {
      const payload = { ...formData, image_url: imageUrl };
      delete payload.file;
      await axios.post("http://localhost:3000/api/barang", payload);
      navigate("/success");
    } catch (error) {
      alert("Gagal mengirim laporan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg space-y-4 text-black"
      >
        <h1 className="text-2xl font-bold text-center text-blue-800">
          Form Laporan Barang
        </h1>
        <input
          name="nama"
          placeholder="Nama"
          onChange={handleChange}
          className="input input-bordered w-full bg-blue-50"
          required
        />
        <input
          name="nim"
          placeholder="NIM"
          onChange={handleChange}
          className="input input-bordered w-full bg-blue-50"
          required
        />
        <input
          name="barang"
          placeholder="Nama Barang"
          onChange={handleChange}
          className="input input-bordered w-full bg-blue-50"
          required
        />
        <input
          name="deskripsi"
          placeholder="Deskripsi Barang"
          onChange={handleChange}
          className="input input-bordered w-full bg-blue-50"
          required
        />
        <input
          name="lokasi"
          placeholder="Lokasi Ditemukan"
          onChange={handleChange}
          className="input input-bordered w-full bg-blue-50"
          required
        />
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="file-input file-input-bordered w-full bg-blue-50"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim Laporan"}
        </button>
      </form>
    </div>
  );
};

export default LaporanPage;
