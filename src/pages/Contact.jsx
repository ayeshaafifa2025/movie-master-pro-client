import React, { useContext } from "react";
import { ThemeContext } from "../Layouts/ThemeProvider";

const Contact = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section
      className={` ${theme === "light" ? "bg-gray-100" : "bg-gray-400"} mx-auto p-6 space-y-6 font-sans text-gray-800`}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}> Contact Us</h1>

     
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>1. Contact Information</h2>
        <p><strong>Email:</strong> support@filmfusionpro.com</p>
        <p><strong>Phone (Optional):</strong> +880-1300-000000</p>
        <p>
          <strong>Office Address (Optional):</strong><br />
          House 12, Road 5, Mirpur DOHS, Dhaka, Bangladesh
        </p>
      </div>

     
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>2. Support Hours / Response Time</h2>
        <p>Our support team checks messages regularly throughout the day.</p>
        <p><strong>Response Time:</strong> Within 24–48 hours.</p>
        <p>For urgent issues, please mention <strong>"Urgent"</strong> in your email subject so we can prioritize your request.</p>
      </div>


      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>3. Why You Should Contact Us</h2>
        <p>You can reach out to us for any kind of help, questions, or feedback. Feel free to contact us regarding:</p>
        <ul style={{ marginLeft: "20px" }}>
          <li><strong>Movie Suggestions</strong> – Recommend new Islamic or family-friendly movies.</li>
          <li><strong>Account Issues</strong> – Login, registration, or profile-related issues.</li>
          <li><strong>Bug Reports</strong> – Problems such as broken pages, loading issues, or errors.</li>
          <li><strong>Content Corrections</strong> – Request updates if you find inaccurate movie details.</li>
          <li><strong>General Inquiries</strong> – Any questions about our website or features.</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
