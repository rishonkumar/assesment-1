const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const recordRoutes = require("./routes/records");

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
