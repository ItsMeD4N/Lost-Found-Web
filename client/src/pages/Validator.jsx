import React, { useState, useEffect } from "react";

const Validator = () => {
  const [validationCode, setValidationCode] = useState("");
  const [status, setStatus] = useState("Belum kirim kode");

  const generateAndSendCode = async () => {
    const code = Math.floor(10 + Math.random() * 90).toString();
    setValidationCode(code);
    const response = await fetch(
      "http://localhost:3000/api/validator/sendcode",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      }
    );
    const data = await response.json();
    if (data.success) {
      setStatus("Silahkan Masukkan Kode Verifikasi");
    } else {
      setStatus("Gagal kirim kode ke ESP32");
    }
  };

  useEffect(() => {
    generateAndSendCode();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-2xl font-bold">Validator</h1>
      <p>
        Kode Validasi: <strong>{validationCode}</strong>
      </p>
      <p>{status}</p>
    </div>
  );
};

export default Validator;
