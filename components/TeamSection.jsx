'use client';

import React, { useState, useEffect } from 'react';

export default function TeamSection() {
  const jpegFiles = [
    "img_0580f8ac.jpeg", "img_07b83e1c.jpeg", "img_1426e201.jpeg", "img_1dc20e6c.jpeg", "img_24a250fc.jpeg", "img_26bec196.jpeg", "img_28543dd8.jpeg", "img_2c270747.jpeg", "img_2df7300d.jpeg", "img_30bb4920.jpeg", "img_380df8d7.jpeg", "img_3d37f7d9.jpeg", "img_40319b6c.jpeg", "img_40fdd26d.jpeg", "img_46071c18.jpeg", "img_463b82be.jpeg", "img_4e585c3b.jpeg", "img_4fabecd6.jpeg", "img_54ef7bc6.jpeg", "img_59d40aa4.jpeg", "img_59fea7e6.jpeg", "img_6155c49c.jpeg", "img_61d6e45b.jpeg", "img_67bfaf5f.jpeg", "img_6ffe2755.jpeg", "img_71bcb627.jpeg", "img_73ba7ce4.jpeg", "img_77eb7121.jpeg", "img_7d68fdb9.jpeg", "img_87a599d2.jpeg", "img_8b6c5b50.jpeg", "img_8e43e6da.jpeg", "img_90c1b177.jpeg", "img_97e25d2a.jpeg", "img_989a0273.jpeg", "img_9f340051.jpeg", "img_a212df89.jpeg", "img_a346dbf9.jpeg", "img_a685d035.jpeg", "img_a6b8b6a8.jpeg", "img_a8888541.jpeg", "img_ab2668ac.jpeg", "img_aff5b577.jpeg", "img_b7ed24ff.jpeg", "img_c0fba1dc.jpeg", "img_c39537e2.jpeg", "img_c400cf73.jpeg", "img_c7d96c50.jpeg", "img_c9a29752.jpeg", "img_cb0ca2c6.jpeg", "img_cf7f434a.jpeg", "img_d68e563e.jpeg", "img_e279974c.jpeg", "img_e27c0935.jpeg", "img_e4be7a77.jpeg", "img_f195c323.jpeg", "img_f19f991d.jpeg", "img_f631190f.jpeg", "img_fd336629.jpeg", "img_fddd3d99.jpeg", "img_fe98650a.jpeg"
  ];

  const webpFiles = [
    "img_001014b9.webp", "img_02b1fc66.webp", "img_0edc9da3.webp", "img_18533ade.webp", "img_1f6e4aa4.webp", "img_20c3ac49.webp", "img_2122f102.webp", "img_2201f2e6.webp", "img_2342ec53.webp", "img_245cbe13.webp", "img_2611d50f.webp", "img_3689f836.webp", "img_441bddf2.webp", "img_45316cf4.webp", "img_49d92a10.webp", "img_4b1169dc.webp", "img_5b57dcee.webp", "img_6d30b64a.webp", "img_7ab9f207.webp", "img_877c3302.webp", "img_899e56fb.webp", "img_a216b3d3.webp", "img_a3c5073f.webp", "img_a6a3b92b.webp", "img_a94804b2.webp", "img_ab04b376.webp", "img_acf5f68d.webp", "img_b0ed8a7a.webp", "img_c88227fb.webp", "img_d08b64d3.webp", "img_d1dd8254.webp", "img_d59c9640.webp", "img_d63d89bd.webp", "img_d9c6591c.webp", "img_e0195adc.webp", "img_e648e0a1.webp", "img_eb2c9608.webp", "img_f650d50e.webp", "img_f71e5cb3.webp", "img_f90953d9.webp"
  ];

  const activists = jpegFiles.map((jpeg, i) => ({
    id: i,
    name: `Activist ${i + 1}`,
    img: `/images/${jpeg}`,
    hoverImg: `/images/${webpFiles[i % webpFiles.length]}`
  }));

  const [spinningIndex, setSpinningIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinningIndex(Math.floor(Math.random() * activists.length));
      setTimeout(() => {
        setSpinningIndex(-1);
      }, 720); // 2 full cycles (360ms * 2)
    }, 1200);
    return () => clearInterval(interval);
  }, [activists.length]);

  return (
    <section className="py-24 bg-[#F0EDE8] overflow-hidden">
      <style>{`
        /* Any other custom styles can go here if needed */
      `}</style>
      
      <div className="container mx-auto px-4 max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-12 lg:mb-16 text-left">
          <h2 className="h2 uppercase text-[#111]">
            MEET OUR TEAM
          </h2>
        </div>

        {/* Responsive grid: 10 columns desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 sm:gap-4 md:gap-5">
          {activists.map((member, i) => {
            const isActive = spinningIndex === i || hoveredIndex === i;
            const currentImg = isActive ? member.hoverImg : member.img;
            
            return (
              <div
                key={i}
                className="group relative cursor-pointer block overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 bg-[#e3e0db]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
                title={member.name}
                style={{ aspectRatio: '1 / 2' }}
              >
                {/* Static JPEG Image */}
                <img 
                  src={member.img} 
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
                  loading="lazy"
                />
                
                {/* Animated WEBP Image */}
                <img 
                  src={member.hoverImg} 
                  alt={`${member.name} animated`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                />

                {/* Preload WEBP image to avoid flashing on hover */}
                <link rel="preload" as="image" href={member.hoverImg} />

                {/* Corner brackets - Imported from Hero Section */}
                <span 
                  className={`absolute inset-0 m-4 grid grid-cols-[auto_auto] justify-between content-between pointer-events-none transition-all duration-300 z-20 text-[#111] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'}`}
                >
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18L14 18M18 14L18 0" stroke="currentColor" strokeMiterlimit="10"/>
                  </svg>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 18L5 18M1 14L1 0" stroke="currentColor" strokeMiterlimit="10"/>
                  </svg>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L14 1M18 5L18 19" stroke="currentColor" strokeMiterlimit="10"/>
                  </svg>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 1L5 1M1 5L1 19" stroke="currentColor" strokeMiterlimit="10"/>
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
