'use client';

import { motion } from 'framer-motion';

export const FadeInOut = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        y: { duration: 1 },
        delay: delay,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
