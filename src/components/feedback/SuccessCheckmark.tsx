import React from 'react';
import { motion } from 'framer-motion';

export const SuccessCheckmark: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-3">
      <svg className="w-16 h-16 text-emerald-500" viewBox="0 0 52 52">
        <motion.circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 27l8 8 16-16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.35, delay: 0.25 }}
        />
      </svg>
    </div>
  );
};