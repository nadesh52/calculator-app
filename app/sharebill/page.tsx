import React from "react";
import { Metadata } from "next";
import SharebillWrapper from "@/components/sharebill/SharebillWrapper";

export const metadata: Metadata = {
  title: "Fair Share",
  description: "Generated by Next.js",
};

export default function ShareBillPage() {
  return (
    <section>
      <SharebillWrapper />
    </section>
  );
}
