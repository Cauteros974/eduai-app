import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: 500,
  border: "none",
  borderRadius: "var(--border-radius)",
  backgroundColor: "var(--primary-color)",
  color: "white",
  cursor: "pointer",
  outline: "none",
  width: "100%",
};

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <motion.button
      style={buttonStyle}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02, backgroundColor: "var(--primary-hover)" }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
