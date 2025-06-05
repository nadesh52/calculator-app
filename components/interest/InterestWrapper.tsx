'use client'
import React from "react";
import ResultBox from "./ResultBox";
import FixedPlan from "./FixedPlan";
import { ResultProvider } from "@/contexts/interest/ResultContext";
import SavingPlan from "./SavingPlan";

const InterestWrapper = () => {
  return (
    <ResultProvider>
      <div className="mx-auto flex max-w-(--breakpoint-md) flex-col items-start gap-4 p-4 md:my-20 md:flex-row">
        <div role="tablist" className="tabs tabs-lifted w-full">
          <input
            type="radio"
            name="tabs"
            role="tab"
            className="text-md tab italic [--tab-border-color:black]"
            aria-label="Saving Plan"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content border-primary bg-base-100 p-6 pt-10"
          >
            <SavingPlan />
          </div>

          <input
            type="radio"
            name="tabs"
            role="tab"
            className="text-md tab italic [--tab-border-color:black]"
            aria-label="Fixed Plan"
          />
          <div
            role="tabpanel"
            className="tab-content border-primary bg-base-100 p-6 pt-10"
          >
            <FixedPlan />
          </div>
        </div>

        <ResultBox />
      </div>
    </ResultProvider>
  );
};

export default InterestWrapper;
