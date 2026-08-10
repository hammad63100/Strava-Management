"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: scrolled ? 'rgba(245, 242, 238, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      padding: scrolled ? '15px 5%' : '25px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: scrolled ? 'var(--orange)' : '#ffffff', display: 'flex', alignItems: 'center', gap: '10px', transition: 'color 0.3s ease' }}>
        <div style={{ fontWeight: '900', fontSize: '16px', letterSpacing: '-0.05em', lineHeight: '1.1' }}>
          STRAVA<br/>MANAGEMENT
        </div>
      </Link>
      
      <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
        {[
          { name: 'Home', href: '/' },
          { name: 'Philosophy', href: '#philosophy' },
          { name: 'The Process', href: '#process' },
          { name: 'Solutions', href: '#solutions' },
          { name: 'Portfolio', href: '#portfolio' },
          { name: 'Insights', href: '#insights' },
        ].map((item) => (
          <Link key={item.name} href={item.href} style={{
            color: scrolled ? 'var(--orange)' : '#ffffff',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            transition: 'color 0.2s ease, opacity 0.2s ease',
            position: 'relative',
          }}
          className="nav-link"
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = '0.7';
            if(!scrolled) e.currentTarget.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = '1';
            if(!scrolled) e.currentTarget.style.color = '#ffffff';
          }}
          >
            {item.name}
          </Link>
        ))}
        
        <Link href="#partner" style={{
          background: scrolled ? 'var(--orange)' : '#ffffff',
          color: scrolled ? 'var(--offwhite)' : '#5A2132',
          padding: '12px 24px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: '900',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 15px rgba(90, 33, 50, 0.2)' : '0 4px 15px rgba(0, 0, 0, 0.15)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }}
        >
          Partner With Us 
          <span style={{ fontSize: '16px', lineHeight: '1', transition: 'transform 0.2s ease' }}>→</span>
        </Link>
      </div>
    </nav>
  );
}
