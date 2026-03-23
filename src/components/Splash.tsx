import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          <span className="text-blue-500">T</span>W
        </div>
        <motion.div
          className="absolute -inset-4 rounded-full border border-blue-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <motion.p
        className="mt-4 text-xs font-mono text-white/50 uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
};

export default Splash;
