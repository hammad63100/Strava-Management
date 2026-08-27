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
        // Hide proactively before footer enters the viewport or when near page bottom
        const isNearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 150;

        if (rect.top <= window.innerHeight + 80 || isNearBottom) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Check immediately and on microtasks/timeouts when view changes
    handleScroll();
    const t1 = setTimeout(handleScroll, 60);
    const t2 = setTimeout(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inFlow, active]);

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
        transform: hidden ? "translate(-50%, 140px)" : "translate(-50%, 0)",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        pointerEvents: hidden ? "none" : "auto",
        transition:
          "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, visibility 0.4s",
        zIndex: 9999,
      };

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          backgroundColor: "var(--dark)",
          borderRadius: "12px",
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
            borderRadius: "8px",
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
