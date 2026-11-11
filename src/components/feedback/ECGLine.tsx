import React from 'react';
import { motion } from 'framer-motion';

export const ECGLine: React.FC = () => {
  return (
    <div className="relative w-full h-16 overflow-hidden flex items-center">
      <svg
        className="w-full h-12"
        viewBox="0 0 500 60"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 L80 30 L95 28 L105 32 L115 30 L130 30 L138 8 L146 52 L154 20 L162 38 L170 30 L220 30 L235 25 L245 35 L255 30 L290 30 L298 10 L306 50 L314 18 L322 36 L330 30 L400 30 L410 27 L420 33 L430 30 L500 30"
          stroke="url(#ecgGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="ecgGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E5282B" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#E5282B" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF6A4D" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        animate={{ x: ['-100%', '600%'] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
      />
    </div>
  );
};