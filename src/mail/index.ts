import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailTransporter = nodemailer.createTransport({
  //service: "gmail",
  service: "hotmail",
  host: "smtp.office365.com", // Outlook SMTP server
  port: 587, // Port for secure TLS (587) or SSL (465) connection
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default mailTransporter;
