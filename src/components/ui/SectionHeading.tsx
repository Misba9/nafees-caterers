import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    id?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<Props> = ({ id, title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2 
          id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold font-serif mb-3 ${light ? 'text-white' : 'text-brand-red'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 100 }}
        viewport={{ once: true }}
        className={`h-1 bg-brand-gold mx-auto mb-4 ${centered ? '' : 'ml-0'}`}
      ></motion.div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
