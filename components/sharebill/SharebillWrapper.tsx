"use client";
import { useState } from "react";
import PeopleTab from "./PeopleTab";
import OrderTab from "./OrderTab";
import SumTab from "./SumTab";
import {
  UserIcon,
  QueueListIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { PeopleProvider } from "@/contexts/sharebill/PeopleContext";
import { OrderProvider } from "@/contexts/sharebill/OrderContext";

const SharebillWrapper = () => {
  const [activeTab, setActiveTab] = useState<number>(2);

  return (
    <PeopleProvider>
      <OrderProvider>
        <section>
          <div
            // id="container"
            className="relative overflow-y-scroll mx-auto h-[calc(100svh-42px)] max-w-(--breakpoint-md) shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          >
            <div>
              {activeTab === 1 ? (
                <PeopleTab />
              ) : activeTab === 2 ? (
                <OrderTab />
              ) : (
                activeTab === 3 && <SumTab />
              )}
            </div>
          </div>

          <div className="justify-centerx fixed left-1/2 mx-auto flex h-14 w-full max-w-(--breakpoint-md) -translate-x-1/2 items-center">
            <button
              onClick={() => setActiveTab(1)}
              className={`${activeTab === 1 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"} flex h-full w-full items-center justify-center hover:bg-neutral-200 hover:text-black`}
            >
              <UserIcon strokeWidth={1} className="size-8" />
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`${activeTab === 2 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"} flex h-full w-full items-center justify-center hover:bg-neutral-200 hover:text-black`}
            >
              <QueueListIcon strokeWidth={1} className="size-8" />
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`${activeTab === 3 ? "active bg-primary text-primary-content" : "text-pretty bg-primary-content"}  flex h-full w-full items-center justify-center hover:bg-neutral-200 hover:text-black`}
            >
              <BanknotesIcon strokeWidth={1} className="size-8" />
            </button>
          </div>
        </section>
      </OrderProvider>
    </PeopleProvider>
  );
};

export default SharebillWrapper;
