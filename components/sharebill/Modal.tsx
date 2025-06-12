"use client";
import React, { useEffect, useRef } from "react";

export const Modal = ({ open, onClose, children }: any) => {
  const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClick = (e: any) => {
  //     if (e.target === modalRef.current) {
  //       onClose();
  //     }
  //   };

  //   window.addEventListener("click", handleClick);
  //   return () => {
  //     window.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <section
      ref={modalRef}
      className={`fixed inset-0 z-50 flex h-full items-center justify-center transition-colors ${
        open ? "visible bg-black/70" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-3/4 rounded bg-white p-4 shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </section>
  );
};
