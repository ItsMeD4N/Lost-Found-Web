import React from "react";

const Fileinput = () => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Input Gambar Barang</legend>
      <input type="file" className="file-input" />
      <label className="label">Max size 2MB</label>
    </fieldset>
  );
};

export default Fileinput;
