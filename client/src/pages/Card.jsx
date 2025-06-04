import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ barang }) => {
  const navigate = useNavigate();

  const handleAmbilClick = () => {
    navigate(`/ambil/${barang.id}`);
  };

  return (
    <div className="bg-blue-950 rounded-lg shadow-lg text-white w-full max-w-sm">
      <img
        src={barang.image_full_url || "https://via.placeholder.com/150"}
        alt={barang.barang}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{barang.barang}</h2>
        <p>{barang.deskripsi}</p>
        <p>
          <strong>Lokasi:</strong> {barang.lokasi}
        </p>
        <p>
          <strong>Nama Pelapor:</strong> {barang.nama}
        </p>
        <p>
          <strong>NIM Pelapor:</strong> {barang.nim}
        </p>
      </div>
      <button
        onClick={handleAmbilClick}
        className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-b-lg"
      >
        Ambil
      </button>
    </div>
  );
};

export default Card;
