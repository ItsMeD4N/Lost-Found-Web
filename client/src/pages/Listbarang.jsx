import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Card from "./Card";

const supabase = createClient(
  "https://rjbdggjpudrmxgxfxxel.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqYmRnZ2pwdWRybXhneGZ4eGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODExNDgsImV4cCI6MjA2NDA1NzE0OH0.HiXtaAuz-CGFrFoP7z-oGP_ontgvPduEgEhFSm37Yzk"
);

const ListBarang = () => {
  const [barangList, setBarangList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("prd_db").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        const barangWithUrl = data.map((item) => {
          const publicUrl = item.image_url
            ? supabase.storage.from("webprd").getPublicUrl(item.image_url).data
                .publicUrl
            : null;
          return { ...item, image_full_url: publicUrl };
        });
        setBarangList(barangWithUrl);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-neutral">
        Daftar Barang Ditemukan
      </h2>
      {barangList.length === 0 ? (
        <p className="text-center text-neutral">
          Tidak ada data barang ditemukan.
        </p>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-6">
          {barangList.map((barang) => (
            <Card key={barang.id} barang={barang} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListBarang;
