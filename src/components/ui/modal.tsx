import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  accent?: "ferrari" | "default" | "subtle";
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  titleClass?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  size = "md",
  showCloseButton = true,
  closeOnOutsideClick = true,
  accent = "default",
  children,
  footer,
  className,
  titleClass
}: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "max-w-md";
      case "md":
        return "max-w-lg";
      case "lg":
        return "max-w-2xl";
      case "xl":
        return "max-w-4xl";
      default:
        return "max-w-lg";
    }
  };

  const getAccentClass = () => {
    switch (accent) {
      case "ferrari":
        return "before:bg-ferrari-red";
      case "subtle":
        return "before:bg-muted";
      default:
        return "before:bg-primary";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className={cn(
              "relative bg-card shadow-lg rounded-lg border overflow-hidden",
              getSize(),
              className
            )}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
          >
            {/* Accent Bar */}
            <div className={cn(
              "relative",
              accent === "ferrari" && "before:absolute before:top-0 before:left-0 before:w-full before:h-1"
            )}>
              {title && (
                <div className={cn(
                  "flex items-center justify-between p-4 border-b",
                  getAccentClass(),
                  titleClass
                )}>
                  <h2 className="text-lg font-semibold">{title}</h2>
                  {showCloseButton && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={onClose}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  )}
                </div>
              )}

              <div className="p-6">{children}</div>

              {footer && <div className="p-4 border-t bg-muted/30">{footer}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Modal }; 