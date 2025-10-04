"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Replace with your backend API URL (example: http://localhost:4000)
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("❌ Error connecting to backend"));
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🚀 Frontend is Running!</h1>
      <h2>Backend Response:</h2>
      <p
        style={{
          fontSize: "20px",
          color: message.includes("Error") ? "red" : "green",
        }}
      >
        {message}
      </p>
    </div>
  );
}
