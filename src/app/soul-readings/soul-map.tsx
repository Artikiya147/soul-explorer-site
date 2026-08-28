"use client";

import { useEffect, useRef } from "react";

export function SoulMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          svg.classList.add("sm-active");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(svg);
    return () => io.disconnect();
  }, []);

  return (
    <div className="soulmap">
      <svg viewBox="0 0 400 400" role="img" aria-label="An illustrated celestial chart" ref={svgRef} id="soulmapSvg">
        <defs>
          <radialGradient id="smGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9B8EC4" stopOpacity=".22" />
            <stop offset="100%" stopColor="#9B8EC4" stopOpacity="0" />
          </radialGradient>
          <filter id="smBloom" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="200" cy="200" r="180" fill="url(#smGlow)" className="sm-glow" />

        <circle cx="200" cy="200" r="172" fill="none" stroke="#C4B5A0" strokeWidth="1" className="sm-ring" style={{ ["--r" as string]: 1082, ["--d" as string]: "0.1s" }} />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#9B8EC4" strokeWidth="1.2" className="sm-ring" style={{ ["--r" as string]: 942, ["--d" as string]: "0.35s" }} />
        <circle cx="200" cy="200" r="92" fill="none" stroke="#C4B5A0" strokeWidth="1" className="sm-ring sm-ring-dash" style={{ ["--r" as string]: 578, ["--d" as string]: "0.6s" }} />
        <circle cx="200" cy="200" r="44" fill="none" stroke="#9B8EC4" strokeWidth="1" className="sm-ring" style={{ ["--r" as string]: 276, ["--d" as string]: "0.85s" }} />

        <g className="sm-lines" style={{ ["--d" as string]: "1.0s" }}>
          <line x1="50" y1="200" x2="350" y2="200" stroke="#9B8EC4" strokeWidth="1" opacity=".7" />
          <line x1="200" y1="50" x2="200" y2="350" stroke="#9B8EC4" strokeWidth="1" opacity=".7" />
          <line x1="93" y1="93" x2="307" y2="307" stroke="#9B8EC4" strokeWidth="1" opacity=".7" />
          <line x1="307" y1="93" x2="93" y2="307" stroke="#9B8EC4" strokeWidth="1" opacity=".7" />
        </g>

        <g stroke="#C4B5A0" strokeWidth="1.4" className="sm-ticks" style={{ ["--d" as string]: "1.2s" }}>
          <line x1="200" y1="28" x2="200" y2="40" />
          <line x1="290" y1="52" x2="284" y2="63" />
          <line x1="348" y1="110" x2="337" y2="116" />
          <line x1="372" y1="200" x2="360" y2="200" />
          <line x1="348" y1="290" x2="337" y2="284" />
          <line x1="290" y1="348" x2="284" y2="337" />
          <line x1="200" y1="372" x2="200" y2="360" />
          <line x1="110" y1="348" x2="116" y2="337" />
          <line x1="52" y1="290" x2="63" y2="284" />
          <line x1="28" y1="200" x2="40" y2="200" />
          <line x1="52" y1="110" x2="63" y2="116" />
          <line x1="110" y1="52" x2="116" y2="63" />
        </g>

        <polygon
          points="200,70 320,250 90,250"
          fill="none"
          stroke="#7E72A8"
          strokeWidth="1.2"
          opacity=".8"
          className="sm-triangle"
          style={{ ["--d" as string]: "1.5s" }}
        />

        <g className="sm-planets" style={{ ["--d" as string]: "1.9s" }} filter="url(#smBloom)">
          <circle cx="200" cy="70" r="5" fill="#7E72A8" className="sm-planet" style={{ ["--pd" as string]: "0s" }} />
          <circle cx="320" cy="250" r="4" fill="#7E72A8" className="sm-planet" style={{ ["--pd" as string]: ".12s" }} />
          <circle cx="90" cy="250" r="4" fill="#7E72A8" className="sm-planet" style={{ ["--pd" as string]: ".24s" }} />
          <circle cx="150" cy="120" r="3.5" fill="#7E72A8" className="sm-planet" style={{ ["--pd" as string]: ".36s" }} />
          <circle cx="270" cy="160" r="3.5" fill="#7E72A8" className="sm-planet" style={{ ["--pd" as string]: ".48s" }} />
        </g>

        <g className="sm-sigil" style={{ ["--d" as string]: "2.2s" }}>
          <path d="M200 176 L205 196 L200 200 L195 196 Z" fill="#9B8EC4" />
          <path d="M200 224 L205 204 L200 200 L195 204 Z" fill="#9B8EC4" opacity=".7" />
          <path d="M176 200 L196 195 L200 200 L196 205 Z" fill="#9B8EC4" opacity=".7" />
          <path d="M224 200 L204 195 L200 200 L204 205 Z" fill="#9B8EC4" opacity=".7" />
          <circle cx="200" cy="200" r="4" fill="#7E72A8" />
        </g>
      </svg>
    </div>
  );
}
