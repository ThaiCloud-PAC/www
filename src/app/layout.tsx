import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThaiCloud — Operational intelligence for fulfillment in SEA",
  description:
    "ThaiCloud (Packiko) unifies WMS, OMS and shipping in one platform for eCommerce brands and 3PLs across Thailand and Southeast Asia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
