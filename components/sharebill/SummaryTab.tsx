"use client";
import { useOrder } from "@/contexts/sharebill/OrderContext";
import { usePeople } from "@/contexts/sharebill/PeopleContext";
import React, { useEffect, useState } from "react";

const SummaryTab = () => {
  const { people } = usePeople();
  const { order } = useOrder();
  const [paidPeople, setPaidPeople] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("paidPeople");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [filterMode, setFilterMode] = useState<"all" | "paid" | "unpaid">(
    "all",
  );

  const filteredPeople = people.map((person: any) => {
    const filteredOrders = order.filter((o: any) =>
      o.people.find((op: any) => op.name === person.name),
    );

    const total = filteredOrders.reduce((prev: any, content: any) => {
      return prev + parseFloat(content.price_per_people);
    }, 0);

    return {
      id: person.name,
      name: person.name,
      orders: filteredOrders,
      total,
    };
  });

  useEffect(() => {
    localStorage.setItem("paidPeople", JSON.stringify(paidPeople));
  }, [paidPeople]);

  useEffect(() => {
    setPaidPeople((prevPaid) =>
      prevPaid.filter((name) => people.some((p: any) => p.name === name)),
    );
  }, [people]);

  const handleTogglePaid = (name: string) => {
    setPaidPeople((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  };

  const displayedPeople = filteredPeople.filter((person: any) => {
    if (filterMode === "paid") return paidPeople.includes(person.name);
    if (filterMode === "unpaid") return !paidPeople.includes(person.name);
    return true; // all
  });

  return (
    <article className="p-4">
      <div>
        <div className="mb-2 text-sm font-medium">View by</div>
        <div className="flex flex-row gap-2">
          {["all", "paid", "unpaid"].map((mode) => (
            <button
              key={mode}
              onClick={() => setFilterMode(mode as any)}
              className={`hover:bg-primary cursor-pointer rounded-full px-3 py-1 hover:text-white ${
                filterMode === mode
                  ? "bg-primary text-white"
                  : "bg-accent-200/20 text-accent-200"
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {displayedPeople.length > 0 && (
        <div className="mt-8 w-full">
          <div className="flex flex-wrap gap-4">
            {displayedPeople.map((person: any, idx: any) => (
              <div
                key={idx}
                className="w-[350px] rounded-lg bg-white p-4 shadow"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-accent-100 grow text-xl font-semibold">
                      {person.name}
                    </h2>
                    <button
                      onClick={() => handleTogglePaid(person.name)}
                      className={`min-w-[90px] rounded px-2 py-1 text-xs ${
                        paidPeople.includes(person.name)
                          ? "bg-success/10 text-success"
                          : "bg-error/10 text-error"
                      }`}
                    >
                      {paidPeople.includes(person.name) ? "Paid" : "Mark Paid"}
                    </button>
                  </div>

                  <hr className="bg-secondary-200 my-2 h-[1px] border-none" />

                  <table className="table w-full table-fixed border-separate">
                    <thead>
                      <tr className="text-secondary-200 text-xs font-medium">
                        <td>Menu</td>
                        <td className="w-[50px] text-center">Qty</td>
                        <td className="w-[80px] text-right">Price</td>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {person.orders.map((o: any) => (
                        <tr key={o.id} className="text-sm">
                          <td className="truncate">{o.name}</td>
                          <td className="text-center">{o.quantity}</td>
                          <td className="text-right">
                            {o.price_per_people.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <hr className="bg-secondary-200 my-2 h-[1px] border-none" />

                  <div className="text-secondary-100 flex w-full items-center justify-between">
                    <p className="font-medium">Total</p>
                    <p className="text-right font-medium">
                      {person.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default SummaryTab;
