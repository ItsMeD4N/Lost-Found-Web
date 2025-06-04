import React from "react";

const ProsedurPage = () => (
  <div className="text-neutral p-8 max-w-3xl mx-auto pl-6">
    <h1 className="text-3xl font-bold mb-6 text-White-900">Halaman Prosedur</h1>
    <div className="space-y-6 text-lg leading-relaxed text-White-800">
      <p className="relative before:content-['•'] before:absolute before:-left-6 before:text-lg">
        Jika Anda kehilangan barang, gunakan fitur{" "}
        <span className="font-semibold">search</span> dengan mengetikkan nama
        barang atau bisa gunakan fitur{" "}
        <span className="font-semibold">filter</span> berdasarkan lokasi dan
        scroll terus hingga menemukan barang Anda yang hilang kemudian ikuti
        instruksi berikutnya. Apabila barang masih belum ada di database, mohon
        tunggu dan cek berkala apabila ada yang menemukan barang Anda.
      </p>
      <p className="relative before:content-['•'] before:absolute before:-left-6 before:text-lg">
        Jika Anda menemukan barang yang tidak diketahui pemiliknya, segera{" "}
        <span className="font-semibold">isi form penemuan barang</span> serta
        amankan barang yang Anda temukan. Ikuti instruksi berikutnya setelah
        mengisi form.
      </p>
    </div>
  </div>
);

export default ProsedurPage;
