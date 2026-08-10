"use client";

import React, { useState } from "react";

export default function ToggleSwitch() {
  const [active, setActive] = useState("agency");

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--dark)",
        borderRadius: "40px",
        padding: "4px",
        position: "relative",
        width: "fit-content",
        margin: "0 auto",
        zIndex: 20,
        border: "2px solid var(--dark)", // slightly thicken the dark border
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      {/* Sliding background */}
      <div
        style={{
          position: "absolute",
          top: "2px",
          bottom: "2px",
          left: active === "brands" ? "2px" : "50%",
          width: "calc(50% - 2px)",
          backgroundColor: "var(--offwhite)",
          borderRadius: "30px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Brands Button */}
      <button
        onClick={() => setActive("brands")}
        style={{
          position: "relative",
          padding: "14px 40px",
          border: "none",
          background: "none",
          color: active === "brands" ? "var(--dark)" : "#ffffff",
          fontSize: "13px",
          fontWeight: "900",
          fontFamily: "inherit",
          cursor: "pointer",
          zIndex: 1,
          transition: "color 0.4s ease",
          textTransform: "uppercase",
          outline: "none",
        }}
      >
        Brands
      </button>

      {/* Agency Button */}
      <button
        onClick={() => setActive("agency")}
        style={{
          position: "relative",
          padding: "14px 40px",
          border: "none",
          background: "none",
          color: active === "agency" ? "var(--dark)" : "#ffffff",
          fontSize: "13px",
          fontWeight: "900",
          fontFamily: "inherit",
          cursor: "pointer",
          zIndex: 1,
          transition: "color 0.4s ease",
          textTransform: "uppercase",
          outline: "none",
        }}
      >
        Agency
      </button>
    </div>
  );
}
