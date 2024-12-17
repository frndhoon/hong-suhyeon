'use client';

import { motion } from 'framer-motion';

export const FadeInOut = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className="w-full flex flex-col items-center"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', y: { duration: 1 } }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};
