import React from 'react';
// We'll try importing framer-motion in a new component
import { motion } from 'framer-motion';

const TestMotion = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Testing Framer Motion</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-20 h-20 bg-blue-500 rounded-md"
      />
    </div>
  );
};

export default TestMotion;