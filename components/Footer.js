import React from "react";

const Footer = () => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <p>&copy; {new Date().getFullYear()} HabitHub. All rights reserved.</p>
  </footer>
);

export default Footer;
