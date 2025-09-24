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

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});


app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "navamani.novastrid@gmail.com",
        pass: "hpgl esxa vwit ztia", // Gmail app password
      },
    });

    await transporter.sendMail({
      from: "navamani.novastrid@gmail.com",
      to: "navamani.novastrid@gmail.com",
      subject: `Hi Navamani, Mr.${name} is visiting your Portfolio webisite. and this is ${name}'s Gmail Address ${email}`,
      text: message,
    });

    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Email failed!" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
