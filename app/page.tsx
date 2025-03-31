import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="mx-auto mt-40 flex h-full max-w-screen-md flex-col items-center justify-center gap-6 text-lg font-medium text-blue-600">
      <Link href="https://nadesh52.github.io/" className="text-neutral-400">
        Back to portfolio
      </Link>
      <h1 className="text-3xl font-bold text-black">Calculator Apps</h1>
      <Link href="/sharebill" target="_blank">
        Share bill
      </Link>
      <Link href="/interest" target="_blank">
        Interest Calculator
      </Link>
      <Link href="/comparison" target="_blank">
        Comparison Price
      </Link>
    </section>
  );
};

export default Home;
