import { motion } from 'framer-motion';
import React from 'react';

const cardStyle: React.CSSProperties = {
    background: 'var(--card-background)',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    cursor: 'pointer',
    overflow: 'hidden',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
};

const contentStyle: React.CSSProperties = {
    padding: '20px',
};

interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}

export const CourseCard = ({ title, description, imageUrl, onClick }: CourseCardProps) => {
    return (
      <motion.div
        style={cardStyle}
        whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        <img src={imageUrl} alt={title} style={imageStyle} />
        <div style={contentStyle}>
          <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{title}</h3>
          <p style={{ margin: 0, color: '#6b7280' }}>{description}</p>
        </div>
      </motion.div>
    );
};
