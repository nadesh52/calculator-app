"use client";
import React, { useState } from "react";
import {
  UserIcon,
  QueueListIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon as UserSolid,
  QueueListIcon as QueueSolid,
  BanknotesIcon as BanknotesSolid,
} from "@heroicons/react/24/solid";

export default function TabGroup({ tabClick }: any) {
  const [activeTab, setActiveTab] = useState<string>("people");

  const handleClick = (value: string) => {
    setActiveTab(value);
    tabClick(value);
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-transparent p-2 drop-shadow-md backdrop-blur-[3px] select-none">
      <div className="mx-auto flex w-fit overflow-hidden rounded-full bg-white">
        <button
          onClick={() => handleClick("people")}
          className={`hover:bg-primary flex h-full w-full cursor-pointer items-center justify-center gap-2 px-4 py-2 font-medium transition-all hover:text-white ${activeTab === "people" ? "active bg-primary text-white" : "text-pretty"}`}
        >
          {activeTab === "people" ? (
            <UserSolid strokeWidth={1} className="size-6" />
          ) : (
            <UserIcon strokeWidth={1} className="size-6" />
          )}
          <p>PEOPLE</p>
        </button>

        <button
          onClick={() => handleClick("order")}
          className={`hover:bg-primary flex h-full w-full cursor-pointer items-center justify-center gap-2 px-4 py-2 font-medium transition-all hover:text-white ${activeTab === "order" ? "active bg-primary text-white" : "text-pretty"}`}
        >
          {activeTab === "order" ? (
            <QueueSolid strokeWidth={1} className="size-6" />
          ) : (
            <QueueListIcon strokeWidth={1} className="size-6" />
          )}
          <p>ORDER</p>
        </button>

        <button
          onClick={() => handleClick("summary")}
          className={`hover:bg-primary flex h-full w-full cursor-pointer items-center justify-center gap-2 px-4 py-2 font-medium transition-all hover:text-white ${activeTab === "summary" ? "active bg-primary text-white" : "text-pretty"}`}
        >
          {activeTab === "summary" ? (
            <BanknotesSolid strokeWidth={1} className="size-6" />
          ) : (
            <BanknotesIcon strokeWidth={1} className="size-6" />
          )}
          <p>SUMMARY</p>
        </button>
      </div>
    </div>
  );
}
