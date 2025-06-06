import ComparisonWrapper from "@/components/comparison/ComparisonWrapper";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="mx-auto mt-10 flex h-full flex-col items-center justify-center gap-8 text-center text-lg font-medium text-blue-600">
      <Link href="https://nadesh52.github.io/" className="text-neutral-400">
        Back to portfolio
      </Link>
      <div className="flex w-full flex-row justify-around">
        <Link
          href="/interest"
          target="_blank"
          className="rounded-xl border border-neutral-50 p-2 shadow transition-all duration-300 hover:shadow-lg"
        >
          <p>Interest Calculator</p>
          <p className="text-xs text-neutral-300">Newbie</p>
        </Link>
        <Link
          href="/sharebill"
          target="_blank"
          className="rounded-xl border border-neutral-50 p-2 shadow transition-all duration-300 hover:shadow-lg"
        >
          <p>Share bill</p>
          <p className="text-xs text-neutral-300">Basic</p>
        </Link>
        <Link
          href="/comparison"
          target="_blank"
          className="rounded-xl border border-neutral-50 p-2 shadow transition-all duration-300 hover:shadow-lg"
        >
          <p>Comparison Price</p>
          <p className="text-xs text-neutral-300">Intermediate</p>
        </Link>
      </div>
      <div>
        <ComparisonWrapper />
      </div>
    </section>
  );
}
