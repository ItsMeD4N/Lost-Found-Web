const express = require("express");
const cors = require("cors");
const app = express();

const barangRouter = require("./routes/barang");
const ambilRouter = require("./routes/ambil");
const ktmRouter = require("./routes/ktm");
const validatorRouter = require("./routes/validator");

app.use(cors());
app.use(express.json());

app.use("/api/barang", barangRouter);
app.use("/api/pengambilan", ambilRouter);
app.use("/api/ktm", ktmRouter);
app.use("/api/validator", validatorRouter);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
