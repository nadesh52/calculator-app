"use client";
import React, { useState } from "react";
import { ResultProvider } from "@/contexts/interest/ResultContext";
import SavingPlan from "../interest/SavingPlan";
import FixedPlan from "../interest/FixedPlan";
import ResultBox from "../interest/ResultBox";

const InterestWrapper = () => {
  const [activeTab, setActiveTab] = useState<"saving" | "fixed">("saving");
  return (
    <ResultProvider>
      <div className="flex flex-col items-start gap-4 md:flex-row p-8">
        <div className="mx-auto w-full max-w-md rounded-xl bg-white shadow">
          {/* Tabs */}
          <div className="flex border-b border-secondary-200">
            <button
              className={`hover:border-primary w-full rounded-tl-xl border-b-2 p-2 font-medium transition-colors hover:cursor-pointer ${
                activeTab === "saving"
                  ? "bg-primary border-primary text-white"
                  : "hover:text-primary text-secondary-100 border-transparent"
              }`}
              onClick={() => setActiveTab("saving")}
            >
              Saving Plan
            </button>
            <button
              className={`hover:border-primary w-full rounded-tr-xl border-b-2 p-2 font-medium transition-colors hover:cursor-pointer ${
                activeTab === "fixed"
                  ? "bg-primary border-primary text-white"
                  : "hover:text-primary text-secondary-100 border-transparent"
              }`}
              onClick={() => setActiveTab("fixed")}
            >
              Fixed Plan
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "saving" && <SavingPlan />}
          {activeTab === "fixed" && <FixedPlan />}
        </div>

        <ResultBox />
      </div>
    </ResultProvider>
  );
};

export default InterestWrapper;
