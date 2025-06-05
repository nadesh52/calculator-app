"use client";
import React from "react";
import OrderCreate from "./OrderCreate";
import TotalTab from "./TotalTab";

const OrderTab = () => {
  return (
    <>
      <div className="flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content">
        Menu
      </div>
      <article className="space-y-4 p-4">
        <OrderCreate />
        <TotalTab />
      </article>
    </>
  );
};

export default OrderTab;
