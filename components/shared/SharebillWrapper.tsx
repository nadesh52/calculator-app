"use client";
import { useState } from "react";
import { PeopleProvider } from "@/contexts/sharebill/PeopleContext";
import { OrderProvider } from "@/contexts/sharebill/OrderContext";
import PeopleTab from "../sharebill/PeopleTab";
import OrderTab from "../sharebill/OrderTab";
import SummaryTab from "../sharebill/SummaryTab";
import TabGroup from "../sharebill/TabGroup";

const SharebillWrapper = () => {
  const [activeTab, setActiveTab] = useState<string>("people");

  const pageContent = () => {
    switch (activeTab) {
      case "people":
        return <PeopleTab />;
      case "order":
        return <OrderTab />;
      case "summary":
        return <SummaryTab />;
      default:
        return <OrderTab />;
    }
  };

  return (
    <PeopleProvider>
      <OrderProvider>
        <section>
          <TabGroup tabClick={(e: any) => setActiveTab(e)} />
          <div className="h-full">{pageContent()}</div>
        </section>
      </OrderProvider>
    </PeopleProvider>
  );
};

export default SharebillWrapper;
