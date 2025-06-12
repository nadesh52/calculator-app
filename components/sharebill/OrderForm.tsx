"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowsRightLeftIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { usePeople } from "@/contexts/sharebill/PeopleContext";

const inputsInit = { name: "", price: 0, quantity: 1, people: [] };

export default function OrderForm({ onClose, onSubmit, order, onDelete }: any) {
  const { people } = usePeople();
  const [inputs, setInputs] = useState<any>(inputsInit);
  const [mode, setMode] = useState<"create" | "edit">("create");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const payload =
      mode === "edit" && order ? { ...inputs, id: order.id } : inputs;

    onSubmit(payload);

    if (onClose) handleClose();
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    if (name !== "name") {
      const numValue = !isNaN(value) ? parseFloat(value) : value;
      setInputs({
        ...inputs,
        [name]: numValue,
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const handleCountClick = (event: any, type: any) => {
    event.preventDefault();

    if (type === "increase") {
      setInputs({ ...inputs, quantity: inputs.quantity + 1 });
    } else if (type === "decrease" && inputs.quantity > 1) {
      setInputs({ ...inputs, quantity: inputs.quantity - 1 });
    }
  };

  const handleDelete = () => {
    if (onDelete && order?.id) {
      onDelete(order.id);
      if (onClose) onClose();
    }
  };

  const handleClose = () => {
    onClose();

    setInputs(inputsInit);
    setMode("create");
  };

  const handleTogglePerson = (person: any) => {
    const exists = inputs.people.some((p: any) => p.name === person.name);

    setInputs((prev: any) => ({
      ...prev,
      people: exists
        ? prev.people.filter((p: any) => p.name !== person.name)
        : [...prev.people, person],
    }));
  };

  const unselectedPeople = people.filter(
    (p: any) => !inputs.people.some((sel: any) => sel.name === p.name),
  );

  const isDisable = inputs.quantity <= 1;

  useEffect(() => {
    if (order) {
      setInputs({
        name: order.name,
        quantity: order.quantity,
        price: order.price,
        people: order.people,
      });
      setMode("edit");
    } else {
      setInputs(inputsInit);
      setMode("create");
    }
  }, [order]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-secondary-100 font-medium">Add New Order</h2>
        {mode === "edit" && (
          <button
            type="button"
            onClick={handleDelete}
            className="border-error/50 btn text-error/50 hover:bg-error w-fit border p-1 transition-all hover:text-white hover:shadow-lg"
          >
            <TrashIcon className="size-4" />
          </button>
        )}
      </div>
      <label className="block">
        <p className="text-secondary-100 select-none">Menu</p>
        <input
          name="name"
          type="text"
          autoComplete="off"
          required
          onChange={handleChange}
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
          onChange={handleChange}
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
            onChange={handleChange}
            value={inputs.quantity || ""}
            className="input order-1 w-full"
          />
          <button
            disabled={isDisable}
            onClick={(e) => handleCountClick(e, "decrease")}
            className={`btn text-accent-100 order-2 ${isDisable ? "bg-secondary-200/50 text-white" : "bg-secondary-100/50 hover:bg-secondary-100"}`}
          >
            <MinusIcon className="size-4" />
          </button>

          <button
            onClick={(e) => handleCountClick(e, "increase")}
            className="btn text-accent-100 hover:bg-secondary-100 bg-secondary-100/50 order-3"
          >
            <PlusIcon className="size-4" />
          </button>
        </div>
      </label>

      <div>
        <p className="text-secondary-100 select-none">Who Ordered</p>
        <div className="flex flex-row justify-items-stretch gap-4">
          <div className="border-accent-200 shrink-0 grow rounded border p-2">
            <h3 className="text-sm font-medium">✅ คนที่เลือกไว้</h3>
            <div className="mt-1 flex h-[180px] flex-col space-y-2 overflow-y-scroll px-2">
              {inputs.people.map((p: any) => (
                <button
                  key={p.name}
                  onClick={() => handleTogglePerson(p)}
                  className="bg-success/60 hover:bg-success cursor-pointer rounded p-1"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <ArrowsRightLeftIcon
            className="text-accent-200 my-auto size-8"
            strokeWidth={1}
          />

          <div className="border-accent-200 shrink-0 grow rounded border p-2">
            <h3 className="text-sm font-medium">🕗 คนที่ยังไม่ได้เลือก</h3>
            <div className="mt-1 flex h-[180px] flex-col space-y-2 overflow-y-scroll px-2">
              {unselectedPeople.map((p: any) => (
                <button
                  key={p.name}
                  onClick={() => handleTogglePerson(p)}
                  className="bg-secondary-200/50 text-accent-200 hover:bg-secondary-200 cursor-pointer rounded p-1"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row justify-between">
        <button
          type="button"
          onClick={handleClose}
          className="bg-error/10 btn text-error/50 w-fit transition-shadow hover:shadow-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn bg-primary w-fit transition-shadow hover:shadow-lg"
        >
          {mode === "edit" ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
