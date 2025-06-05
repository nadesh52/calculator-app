"use client";
import DataList from "./DataList";
import InputForm from "./InputForm";
import ResetButton from "./ResetButton";
import ResultCard from "./ResultCard";
import React, { useCallback, useEffect, useState } from "react";

const ComparisonWrapper = () => {
  const [items, setItems] = useState<any>([]);

  const handleReset = useCallback(
    (value: any) => {
      setItems(value);
    },
    [setItems],
  );

  const handleForm = (value: any) => {
    setItems((prev: any) => [...prev, value]);
  };

  const handleRemove = (e: any) => {
    setItems((prev: any) => prev.filter((data: any) => data.id !== e.id));
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <section className="bg-base-content fixed top-0 h-[80px] w-full sm:h-[72px]">
        <div className="absolute top-14 left-1/2 -translate-x-1/2 sm:top-10">
          <div className="flex flex-row gap-4">
            <ResultCard items={items} />
            <ResetButton reset={handleReset} />
          </div>
        </div>
      </section>

      <section className="mx-auto mb-3 max-w-(--breakpoint-sm) pt-[106px]">
        <div
          // id="container"
          className="h-[calc(100svh-185px)] overflow-y-scroll py-4"
        >
          {items.length ? (
            <DataList items={items} removeId={handleRemove} />
          ) : null}
        </div>
      </section>

      <div className="bg-base-content fixed bottom-0 w-full px-4 pt-2 pb-4">
        <InputForm formData={handleForm} />
      </div>
    </>
  );
};

export default ComparisonWrapper;
