import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zakat Calculator",
  description:
    "Calculate your Zakat based on 2.5% of your Zakat-eligible amount, with today's live silver and gold Nisab thresholds.",
};

export default function ZakatCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
