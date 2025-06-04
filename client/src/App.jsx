import React from "react";
import Navbar from "./pages/NavBar";
import Footer from "./pages/footer";
import { Routes, Route } from "react-router-dom";
import Button from "./pages/button";
import logoItb from "./assets/itb.png";
import { TypeAnimation } from "react-type-animation";
import LaporanPage from "./pages/Laporan";
import ProsedurPage from "./pages/Prosedur";
import Success from "./pages/Success";
import Listbarang from "./pages/Listbarang";
import Ambil from "./pages/Ambil";
import UploadKTM from "./pages/Uploadktm";
import Validator from "./pages/Validator";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="bg-blue-100 flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Laporan" element={<LaporanPage />} />
          <Route path="/Prosedur" element={<ProsedurPage />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/listbarang" element={<Listbarang />} />
          <Route path="/ambil/:id" element={<Ambil />} />
          <Route path="/uploadktm" element={<UploadKTM />} />
          <Route path="/Validator" element={<Validator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const HomePage = () => (
  <div className="bg-blue-100 flex flex-1 flex-col items-center justify-center text-center text-neutral gap-6">
    <TypeAnimation
      sequence={[
        "Selamat datang di Lost & Found",
        2000,
        "Created By 11/100",
        500,
      ]}
      speed={50}
      wrapper="h1"
      className="text-3xl md:text-4xl font-bold mb-2"
      repeat={Infinity}
    />
    <img
      src={logoItb}
      alt="Logo ITB"
      className="w-64 h-64 object-contain mx-auto mb-4"
    />
    <h2 className="text-xl md:text-2xl font-medium mb-6">ITB Jatinangor</h2>
  </div>
);

export default App;
