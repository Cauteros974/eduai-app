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
}


  