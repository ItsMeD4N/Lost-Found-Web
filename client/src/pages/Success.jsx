import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const barang = location.state?.barang;

  const handleBack = async () => {
    try {
      await axios.get("http://localhost:3000/api/barang/close");
      navigate("/");
    } catch (error) {
      console.error("Gagal menutup brankas", error);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
      <div className="bg-grey shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-white-600 mb-4">
          Barang Berhasil Diinput!
        </h1>
        <p className="text-center mb-6">
          Silahkan masukkan barang ke dalam brankas.
        </p>
        {barang ? (
          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">Nama:</span> {barang.nama}
            </p>
            <p>
              <span className="font-semibold">NIM:</span> {barang.nim}
            </p>
            <p>
              <span className="font-semibold">Barang:</span> {barang.barang}
            </p>
            <p>
              <span className="font-semibold">Deskripsi:</span>{" "}
              {barang.deskripsi}
            </p>
            <p>
              <span className="font-semibold">Lokasi:</span> {barang.lokasi}
            </p>
          </div>
        ) : (
          <p className="text-center text-red-500"></p>
        )}
        <button
          onClick={handleBack}
          className="mt-6 w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
        >
          Tutup Brankas Penympanan
        </button>
      </div>
    </div>
  );
};

export default Success;
