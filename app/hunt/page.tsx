"use client";

import { useState } from "react";

export default function HuntPage() {
  const [code, setCode] = useState("");
  const [clue, setClue] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });

    const data = await res.json();

    if (data.correct) {
      setClue(data.clue);
      setCode("");
    } else {
      setError("❌ Incorrect code. Try again!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1>🗝 Treasure Hunt</h1>

      {clue ? (
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontSize: "18px" }}>{clue}</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <input
              type="text"
              placeholder="Enter previous clue's code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                padding: "8px",
                fontSize: "16px",
                width: "70%",
                marginRight: "10px"
              }}
            />
            <button
              type="submit"
              style={{
                padding: "8px 12px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
          </form>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </>
      )}
    </div>
  );
}
