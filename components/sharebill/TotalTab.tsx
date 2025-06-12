"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useOrder } from "@/contexts/sharebill/OrderContext";
import OrderForm from "./OrderForm";
import OrderCard from "./OrderCard";

const TotalTab = () => {
  const { order, setOrder } = useOrder();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const handleEdit = (order: any) => {
    const total = order.price * order.quantity;
    const price = total / order.people.length;

    const newO = {
      ...order,
      total: total,
      price_per_people: price,
    };

    setOrder((prev: any) => {
      return prev.map((o: any) => {
        if (o.id !== newO.id) return o;
        return newO;
      });
    });
  };

const handleDelete = (id: string) => {
  setOrder((prevOrders: any) => {
    const updatedOrders = prevOrders.filter((order: any) => order.id !== id);
    localStorage.setItem("order", JSON.stringify(updatedOrders));
    return updatedOrders;
  });
  setOpen(false);
};

  const handleClose = () => {
    setOpen(false);
    setSelectedOrder(null);
  };

  useEffect(() => {
    const stored = localStorage.getItem("order");
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <OrderForm
          onSubmit={handleEdit}
          onDelete={handleDelete}
          onClose={handleClose}
          order={selectedOrder}
        />
      </Modal>

      <p className="text-secondary-100 mt-4 font-medium">Current Order</p>
      <ul className="mt-2 space-y-4">
        {order?.length
          ? order.map((o: any, i: any) => (
              <li key={i} className="rounded-xl bg-white px-4 py-2 shadow">
                <OrderCard
                  o={o}
                  onOpen={() => {
                    setSelectedOrder(o);
                    setOpen(true);
                  }}
                />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default TotalTab;
