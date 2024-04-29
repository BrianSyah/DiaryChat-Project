"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function AlertDiary(): React.ReactElement {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        <div role="alert" className="alert alert-warning xl:my-7 my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            Warning: This application still has a bug and is in correction
            status, if you create a diary you need to refresh the page so that
            the diary appears on the My-Diary page!
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AlertDiary;
