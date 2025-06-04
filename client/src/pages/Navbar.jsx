import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swap from "./Swap";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-blue-950 shadow-sm">
      {/* Kiri: logo atau judul */}
      <div className="navbar-start">
        {/* Hamburger untuk mobile */}
        <div className="lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setDropdownOpen((v) => !v)}
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {/* Dropdown mobile */}
          {dropdownOpen && (
            <ul className="menu menu-sm dropdown-content bg-blue-900 rounded-box shadow z-50 absolute mt-2 w-52 p-2 text-white left-0">
              <li>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/");
                  }}
                  className="text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/prosedur");
                  }}
                  className="text-left"
                >
                  Prosedur
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/listbarang");
                  }}
                  className="text-left"
                >
                  List Barang
                </button>
              </li>
            </ul>
          )}
        </div>
        {/* Judul/logo */}
        <span
          className="ml-2 font-bold text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          LOST & FOUND
        </span>
      </div>

      {/* Tengah: menu desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/prosedur");
              }}
            >
              Prosedur
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/listbarang");
              }}
            >
              List Barang
            </a>
          </li>
        </ul>
      </div>

      {/* Kanan: tombol Lapor */}
      <div className="navbar-end">
        <button
          className="btn bg-red-500 text-white"
          onClick={() => navigate("/laporan")}
        >
          Lapor
        </button>
      </div>
    </div>
  );
};

export default Navbar;
