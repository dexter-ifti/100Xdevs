import React, { useEffect, useRef } from "react";

function Toast({ toast, removeToast }) {
  const timeRef = useRef(null);
  const startTimeRef = useRef(0);
  const remainingRef = useRef(3000);
  const isRemovedRef = useRef(false);

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timeRef.current);
  }, [toast.id]);

  const safeRemove = () => {
    if (isRemovedRef.current) return;
    isRemovedRef.current = true;
    removeToast(toast.id);
  };

  const startTimer = () => {
    startTimeRef.current = Date.now();
    timeRef.current = setTimeout(() => {
      safeRemove();
    }, remainingRef.current);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeRef.current);

    const elapsed = Date.now() - startTimeRef.current;
    remainingRef.current = Math.max(
      remainingRef.current - elapsed,
      0
    );
  };

  const handleMouseLeave = () => {
    if (remainingRef.current <= 0) return;
    startTimer();
  };

  return (
    <div
      className={`toast ${toast.type} ${toast.isClosing ? "closing" : ""
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {toast.message}

      <button type="button" onClick={safeRemove}>
        X
      </button>
    </div>
  );
}

export default Toast;