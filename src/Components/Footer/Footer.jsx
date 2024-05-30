import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p>
        &copy; <span>{year}</span> codeclouds.com - All Rights Copyright
      </p>
    </footer>
  );
}
