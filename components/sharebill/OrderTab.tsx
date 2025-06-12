"use client";
import React from "react";
import TotalTab from "./TotalTab";
import OrderCreate from "./OrderCreate";

const OrderTab = () => {
  return (
    <article className="p-4">
      <OrderCreate />
      <TotalTab />
    </article>
  );
};

export default OrderTab;
