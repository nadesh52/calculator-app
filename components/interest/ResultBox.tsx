"use client";
import { useResultContext } from "@/contexts/interest/ResultContext";
import React from "react";

const interestDif = (total: any, deposite: any) => {
  const res = total - deposite;
  return Number(res.toFixed(2));
};

const ResultBox = () => {
  const { result } = useResultContext();

  return (
    <div className="w-full space-y-4 rounded-xl bg-white px-4 pb-4 shadow">
      <div>
        <h2 className="text-2xl font-semibold text-accent-200">Summary</h2>
        <hr className="bg-secondary-200 my-2 h-[1px] border-none" />
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-secondary-100">Initial Deposite</p>
        <p className="text-accent-200 text-lg font-medium">
          {result.amount} Baht
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-secondary-100">Interest</p>
        <p className="text-accent-200 text-lg font-medium">
          {result.interest} Baht
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-secondary-100">Days</p>
        <p className="text-accent-200 text-lg font-medium">{result.day} Days</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-secondary-100">Total Value</p>
        <p className="text-accent-200 text-lg font-medium">
          {result.total} Baht
        </p>
      </div>

      <hr className="bg-secondary-200 my-2 h-[1px] border-none" />

      <div className="flex w-full items-center justify-between">
        <p className="text-secondary-100">Interest Earned</p>
        <p className="text-accent-200 text-lg font-medium">
          {isNaN(interestDif(result.total, result.amount))
            ? null
            : interestDif(result.total, result.amount)}{" "}
          Bath
        </p>
      </div>
    </div>
  );
};

export default ResultBox;
