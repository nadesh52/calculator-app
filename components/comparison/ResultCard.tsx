"use client";

import React, { useEffect, useState } from "react";

const inputRes = {
  id: 0,
  name: "-",
  number: 0,
  quantity: 0,
  price: 0,
  count: 0,
  average: 0,
};

const sumResult = (data: any) => {
  const max = data.reduce(function (prev: any, current: any) {
    return prev && prev.average > current.average ? prev : current;
  });
  return max;
};

const ResultCard = ({ items }: any) => {
  const [result, setResult] = useState(inputRes);

  useEffect(() => {
    if (items.length !== 0) {
      setResult(sumResult(items));
    } else {
      setResult(inputRes);
    }
  }, [items]);

  return (
    <div className="relative bg-white rounded-sm shadow-sm py-4 px-8">
      <div className="grow flex gap-8 items-center justify-between max-w-(--breakpoint-sm) min-[425px]:w-[350px] min-w-[250px]">
        <div className="text-center">
          <p className="sm:text-4xl font-medium text-slate-300">{result.number}</p>
          <p className="text-xs text-slate-400">#</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-medium">{result.quantity}</p>
          <p className="text-xs text-slate-400">Quantity</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-medium">{result.price}</p>
          <p className="text-xs text-slate-400">Price</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-medium">{result.count}</p>
          <p className="text-xs text-slate-400">Count</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-semibold">{result.average}</p>
          <p className="text-xs text-slate-400">Average</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
