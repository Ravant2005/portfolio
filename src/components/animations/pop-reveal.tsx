"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PopRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function PopReveal({ children, className, delay = 0 }: PopRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
        delay: delay / 1000,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
