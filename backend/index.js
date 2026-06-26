// backend/index.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const path = require("path");

// Serve frontend build in production
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "navamani.novastrid@gmail.com",
        pass: "gwdg dvia nnhl uojo",
      },
    });

    await transporter.sendMail({
      from: "navamani.novastrid@gmail.com",
      to: email,
      subject: `Hi Navamani, Mr.${name} is visiting your Portfolio.`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

// Catch-all LAST
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
