import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UploadKTM = () => {
  const [countdown, setCountdown] = useState(5);
  const [status, setStatus] = useState("Menyiapkan pengambilan foto KTM...");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    if (countdown === 0) {
      clearInterval(timer);
      setStatus("Mengambil foto dari ESP32...");
      fetch("http://localhost:3000/api/ktm/capture")
        .then((res) => res.json())
        .then((data) => {
          setImage(data.image);
          setStatus("Foto berhasil diambil!");
          setTimeout(() => navigate("/validator"), 3000);
        })
        .catch((error) => {
          console.error("Gagal ambil foto:", error);
          setStatus("Gagal ambil foto. Coba lagi.");
        });
    }
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-white text-black">
      <h1 className="text-2xl font-bold">Upload KTM</h1>
      {countdown > 0 ? (
        <p className="text-lg">Mengambil foto dalam {countdown} detik...</p>
      ) : (
        <>
          <p className="text-lg">{status}</p>
          {image && <img src={`data:image/jpeg;base64,${image}`} alt="KTM" />}
        </>
      )}
    </div>
  );
};

export default UploadKTM;
