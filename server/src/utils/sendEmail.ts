const nodemailer = require("nodemailer");
import * as dotenv from "dotenv";
dotenv.config();
export async function sendEmail(email: string, html: string, topic: string) {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });
    // Set up email options
    const mailOptions = {
      from: '"Shop KITE " <kitegaming1709@gmail.com>', // Sender address
      to: email, // List of receivers
      subject: topic, // Subject line
      text: "", // Plain text body
      html: html, // HTML body
    };
  
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log("Error in sending email  " + error);
        return true;
      } else {
        console.log("Email sent: " + info.response);
        return false;
      }
    });
  }