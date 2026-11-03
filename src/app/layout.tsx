import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Packiko by ThaiCloud — WMS for high-volume fulfillment",
  description:
    "Packiko is a warehouse management system for online stores shipping 1,000+ orders a day and fulfillment providers — orders, picking, packing and handover in one system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
