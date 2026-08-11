"use client";

import React, { useState, useEffect } from "react";
import { useView } from "./ViewContext";

export default function ToggleSwitch({ inFlow = false }) {
  const { activeView: active, setActiveView: setActive } = useView();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (inFlow) return; // Don't handle scroll hiding if it's in flow
    
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Hide when footer enters the viewport
        if (rect.top <= window.innerHeight - 50) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inFlow]);

  const containerStyle = inFlow
    ? {
        position: "relative",
        zIndex: 10,
        margin: "0 auto",
      }
    : {
        position: "fixed",
        bottom: "40px",
        left: "50%",
        transform: hidden ? "translate(-50%, 160px)" : "translate(-50%, 0)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 9999,
        pointerEvents: "auto",
      };

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          backgroundColor: "var(--dark)",
          borderRadius: "40px",
          padding: "4px",
          position: "relative",
          width: "fit-content",
          border: "2px solid var(--dark)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
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
    </div>
  );
}
