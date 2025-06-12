"use client";
import React, { useState } from "react";
import OrderForm from "./OrderForm";
import { useOrder } from "@/contexts/sharebill/OrderContext";
import { Modal } from "./Modal";

const OrderCreate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { setOrder } = useOrder();

  const handleSubmit = (order: any) => {
    const total = order.price * order.quantity;
    const price = total / order.people.length;
    const generatedId = Math.floor(Date.now() * Math.random());

    const newOrder = {
      ...order,
      id: generatedId,
      total: total,
      price_per_people: price,
    };

    setOrder((prev: any) => {
      const updated = [...prev, newOrder];
      localStorage.setItem("order", JSON.stringify(updated));
      return updated;
    });
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <OrderForm onSubmit={handleSubmit} onClose={() => setOpen(false)} />
      </Modal>

      <button
        onClick={() => setOpen(true)}
        className="btn bg-primary w-fit transition-shadow hover:shadow-lg"
      >
        Add New Order
      </button>

      {/* 
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl bg-white p-4 shadow"
      >
        <h2 className="text-secondary-100 font-medium">Add New Order</h2>
        <label className="block">
          <p className="text-secondary-100 select-none">Menu</p>
          <input
            name="name"
            type="text"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            value={inputs.name || ""}
            className="input w-full"
          />
        </label>

        <label className="relative block">
          <p className="text-secondary-100 select-none">Price</p>
          <input
            name="price"
            type="number"
            autoComplete="off"
            required
            onChange={(e) => handleChange(e)}
            value={inputs.price || ""}
            className="peer input w-full"
          />
          <p className="pointer-events-none invisible absolute top-1/2 right-1 border-l border-l-slate-400 px-2 select-none peer-valid:visible peer-focus-visible:visible">
            THB
          </p>
        </label>

        <label className="block">
          <p className="text-secondary-100 select-none">Quantity</p>
          <div className="flex gap-4">
            <input
              name="quantity"
              type="number"
              autoComplete="off"
              required
              onChange={(e) => handleChange(e)}
              value={inputs.quantity || ""}
              className="input w-full"
            />
            <button
              disabled={isDisable}
              onClick={(e) => handleCountClick(e, "decrease")}
              className="btn bg-accent-200 order-2"
            >
              <MinusIcon className="size-4" />
            </button>

            <button
              onClick={(e) => handleCountClick(e, "increase")}
              className="btn bg-accent-200 order-3"
            >
              <PlusIcon className="size-4" />
            </button>
          </div>
        </label>

        <div>
          <p className="text-secondary-100 select-none">Who Ordered</p>
          <section className="space-y-2">
            <div className="border-secondary-200 rounded border p-2">
              <p className="text-secondary-100">
                Available
                <span className="text-secondary-100 text-xs">
                  {" "}
                  (Click to add)
                </span>
              </p>
              <AvailableList
                selectedPeople={handleSelectedPeople}
                availablePeople={availablePeople}
              />
            </div>

            {selectedPeople.length ? (
              <div className="border-secondary-200 rounded border p-2">
                <p className="text-secondary-100">
                  Selected
                  <span className="text-secondary-100 text-xs">
                    {" "}
                    (Click to add)
                  </span>
                </p>
                <SelectedList
                  selectedPeople={selectedPeople}
                  removePeople={handleRemovePeople}
                />
              </div>
            ) : null}
          </section>
        </div>

        <button type="submit" className="btn bg-primary font-medium">
          Create Order
        </button>
      </form> */}
    </>
  );
};

export default OrderCreate;
