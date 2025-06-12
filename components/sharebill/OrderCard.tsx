"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function OrderCard({ o, onOpen }: any) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex w-3/4 grow flex-col">
        <p className="text-lg font-medium">
          {o.name}
          <span className="text-sm text-slate-400"> x {o.quantity}</span>
        </p>

        <ul className="mt-2 flex flex-wrap items-center gap-2">
          {o.people?.map((person: any, i: any) => (
            <li key={i}>
              <p className="bg-secondary-200/20 w-fit rounded-full px-2 shadow">
                {person?.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="row flex w-1/4 grow items-center justify-between">
        <div className="flex flex-col text-right">
          <p className="text-lg font-medium">{o.total}</p>
          {o.people.length && (
            <p className="text-sm">{o.price_per_people} each</p>
          )}
        </div>

        <button
          onClick={() => {
            onOpen(onOpen);
          }}
          className="bg-secondary-200/20 hover:bg-secondary-200 cursor-pointer rounded-full p-1 transition-colors"
        >
          <EllipsisVerticalIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}
