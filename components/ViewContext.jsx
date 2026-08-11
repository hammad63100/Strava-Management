"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const ViewContext = createContext();

const getInitialView = () => {
  if (typeof window !== "undefined") {
    const hash = window.location.hash.replace("#", "");
    if (hash === "brands" || hash === "agency") {
      return hash;
    }
    const savedView = localStorage.getItem("activeView");
    if (savedView === "brands" || savedView === "agency") {
      return savedView;
    }
  }
  return "agency";
};

export function ViewProvider({ children }) {
  const [activeView, setActiveView] = useState(getInitialView);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hash = window.location.hash.replace("#", "");
    if (hash === "brands" || hash === "agency") {
      setActiveView(hash);
    } else {
      const savedView = localStorage.getItem("activeView");
      if (savedView === "brands" || savedView === "agency") {
        setActiveView(savedView);
      }
    }
  }, []);

  const changeView = (view) => {
    setActiveView(view);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeView", view);
      if (view === "brands" || view === "agency") {
        window.history.replaceState(null, "", `#${view}`);
      }
    }
  };

  return (
    <ViewContext.Provider value={{ activeView, setActiveView: changeView, mounted }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
