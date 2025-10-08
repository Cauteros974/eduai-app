import React from "react";

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
};

const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'var(--primary-color)';
    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.2)';
};