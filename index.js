import express from "express";
import os from "os";
import dns from "dns";
import { readFileData } from "./read.js";

const app = express();
const PORT = 3000;

// --------------------
// Test Route
// --------------------
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// --------------------
// Read File Route
// --------------------
app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// --------------------
// System Details Route
// --------------------
app.get("/systemdetails", (req, res) => {
  const platform = os.platform();
  const totalMemory = (os.totalmem() / 1024 ** 3).toFixed(0) + " GB";
  const freeMemory = (os.freemem() / 1024 ** 3).toFixed(0) + " GB";
  const cpuModel = os.cpus()[0].model;
  const cpuCores = os.cpus().length; // Bonus ✔

  res.json({
    platform,
    totalMemory,
    freeMemory,
    cpuModel,
    cpuCores
  });
});

// --------------------
// Get IP Route
// --------------------
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).send("DNS lookup failed");
      return;
    }

    res.json({
      hostname: "masaischool.com",
      addresses
    });
  });
});

// --------------------
// Start Server
// --------------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
