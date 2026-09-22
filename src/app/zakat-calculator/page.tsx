"use client";

import { useEffect, useState } from "react";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const ZAKAT_RATE = 0.025;
const SILVER_NISAB_TOLA = 52.5;
const GOLD_NISAB_TOLA = 7.5;
// 1 tola = 11.6638 g; 1 troy ounce = 31.1035 g
const TROY_OZ_PER_TOLA = 11.6638 / 31.1035;

function formatPKR(value: number): string {
  return new Intl.NumberFormat("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function ZakatCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
  const [silverPerTola, setSilverPerTola] = useState<number | null>(null);
  const [goldPerTola, setGoldPerTola] = useState<number | null>(null);
  const [nisab, setNisab] = useState<number | null>(null);
  const [goldNisab, setGoldNisab] = useState<number | null>(null);
  const [rateLoading, setRateLoading] = useState(true);
  const [rateError, setRateError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadRates() {
      try {
        const [silverRes, goldRes, fxRes] = await Promise.all([
          fetch("https://api.gold-api.com/price/XAG"),
          fetch("https://api.gold-api.com/price/XAU"),
          fetch("https://open.er-api.com/v6/latest/USD"),
        ]);
        const silverSpot = await silverRes.json();
        const goldSpot = await goldRes.json();
        const fx = await fxRes.json();
        const silverUsdPerOz = silverSpot?.price;
        const goldUsdPerOz = goldSpot?.price;
        const usdToPkr = fx?.rates?.PKR;
        if (!silverUsdPerOz || !goldUsdPerOz || !usdToPkr) throw new Error("Missing rate data");
        const silverTola = silverUsdPerOz * TROY_OZ_PER_TOLA * usdToPkr;
        const goldTola = goldUsdPerOz * TROY_OZ_PER_TOLA * usdToPkr;
        if (cancelled) return;
        setSilverPerTola(silverTola);
        setGoldPerTola(goldTola);
        setNisab(silverTola * SILVER_NISAB_TOLA);
        setGoldNisab(goldTola * GOLD_NISAB_TOLA);
      } catch {
        if (!cancelled) setRateError("Could not fetch today's silver and gold rates.");
      } finally {
        if (!cancelled) setRateLoading(false);
      }
    }

    loadRates();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleCalculate = () => {
    const trimmed = amount.trim();

    if (trimmed === "") {
      setError("Please enter the amount on which you want to calculate Zakat.");
      setResult(null);
      setCalculatedAmount(null);
      return;
    }

    const value = Number(trimmed);

    if (Number.isNaN(value)) {
      setError("Please enter a valid number. Only digits are accepted.");
      setResult(null);
      setCalculatedAmount(null);
      return;
    }

    if (value < 0) {
      setError("The amount cannot be negative. Please enter a positive value.");
      setResult(null);
      setCalculatedAmount(null);
      return;
    }

    if (value === 0) {
      setError("The amount cannot be zero. Please enter a value greater than zero.");
      setResult(null);
      setCalculatedAmount(null);
      return;
    }

    if (nisab !== null && value < nisab) {
      setError(
        `Your amount is below the Nisab threshold of Rs. ${formatPKR(nisab)} (52.5 tola of silver). Zakat is not obligatory on amounts below Nisab.`,
      );
      setResult(null);
      setCalculatedAmount(null);
      return;
    }
    setError(null);
    setResult(value * ZAKAT_RATE);
    setCalculatedAmount(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCalculate();
    }
  };

  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Zakat Calculator", href: "/zakat-calculator" },
        ]}
        title="Zakat Calculator"
        lead="Calculate your Zakat based on 2.5% of your Zakat-eligible amount."
      />

      <section className="py-20 lg:py-24">
        <div className="shell-wide">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="rounded-2xl border border-[#DCE2EA] bg-white p-7 shadow-soft sm:p-10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCalculate();
                  }}
                  noValidate
                >
                  <label
                    htmlFor="zakat-amount"
                    className="font-display text-[1.05rem] font-extrabold text-[#0A1020]"
                  >
                    Zakat-Eligible Amount
                  </label>

                  <div className="mt-3 flex items-stretch overflow-hidden rounded-xl border border-[#DCE2EA] bg-white transition-colors focus-within:border-[#075BD6] focus-within:ring-2 focus-within:ring-[#075BD6]/20">
                    <span className="flex shrink-0 items-center border-r border-[#DCE2EA] bg-[#F5F7FA] px-4 font-display text-[0.95rem] font-bold text-[#4B5563]">
                      PKR
                    </span>
                    <input
                      id="zakat-amount"
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="any"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      onKeyDown={handleKeyDown}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? "zakat-error" : undefined}
                      className="w-full bg-transparent px-4 py-3.5 font-display text-[1.05rem] font-bold text-[#0A1020] outline-none placeholder:font-normal placeholder:text-slate-400"
                    />
                  </div>

                  {error ? (
                    <p
                      id="zakat-error"
                      role="alert"
                      className="mt-3 flex items-start gap-2 text-[0.9rem] font-semibold text-[#EF3B19]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#075BD6] px-6 py-3.5 font-display text-[0.98rem] font-bold text-white shadow-[0_10px_24px_-8px_rgba(7,91,214,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e53935] hover:shadow-[0_10px_24px_-8px_rgba(229,57,53,0.4)] active:scale-98"
                  >
                    Calculate Zakat
                  </button>
                </form>

                {/* Live silver & gold rates + Nisab */}
                <div className="mt-6 rounded-xl border border-[#DCE2EA] bg-[#F5F7FA] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-[0.95rem] font-extrabold text-[#0A1020]">
                      Today's Live Metal Rates
                    </p>
                    {rateLoading ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#075BD6]" />
                        Fetching live rates…
                      </span>
                    ) : null}
                  </div>

                  {rateError ? (
                    <p className="mt-2 text-[0.85rem] font-semibold text-[#EF3B19]">{rateError}</p>
                  ) : silverPerTola !== null && goldPerTola !== null ? (
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-lg bg-white px-3.5 py-2.5 shadow-xs">
                        <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[#6B7280]">
                          Silver / tola
                        </p>
                        <p className="mt-0.5 font-display text-[1.05rem] font-black text-[#0A1020]">
                          Rs. {formatPKR(silverPerTola)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white px-3.5 py-2.5 shadow-xs">
                        <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[#6B7280]">
                          Gold / tola
                        </p>
                        <p className="mt-0.5 font-display text-[1.05rem] font-black text-[#0A1020]">
                          Rs. {formatPKR(goldPerTola)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white px-3.5 py-2.5 shadow-xs">
                        <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[#6B7280]">
                          Nisab (52.5 tola silver)
                        </p>
                        <p className="mt-0.5 font-display text-[1.05rem] font-black text-[#075BD6]">
                          Rs. {formatPKR(nisab ?? 0)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white px-3.5 py-2.5 shadow-xs">
                        <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[#6B7280]">
                          Nisab (7.5 tola gold)
                        </p>
                        <p className="mt-0.5 font-display text-[1.05rem] font-black text-[#075BD6]">
                          Rs. {formatPKR(goldNisab ?? 0)}
                        </p>
                      </div>
                    </div>
                  ) : null}

                  <p className="mt-3 text-[0.8rem] leading-relaxed text-[#6B7280]">
                    Zakat becomes obligatory once your Zakat-eligible wealth reaches the Nisab
                    threshold. The calculator uses the silver Nisab (52.5 tola) as the threshold for
                    your calculation; the gold Nisab (7.5 tola) is shown for reference.
                  </p>
                </div>

                {result !== null && calculatedAmount !== null ? (
                  <div className="mt-8 rounded-2xl border border-[#DCE6FB] bg-[#F3F7FF] p-7 text-center">
                    <p className="font-display text-[0.95rem] font-extrabold uppercase tracking-wider text-[#075BD6]">
                      Your Zakat Due
                    </p>
                    <p className="mt-2 font-display text-[clamp(2rem,5vw,2.75rem)] font-black leading-tight text-[#0A1020]">
                      Rs. {formatPKR(result)}
                    </p>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-[#4B5563]">
                      This is 2.5% of your Zakat-eligible amount of Rs. {formatPKR(calculatedAmount)}.
                    </p>
                  </div>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-[0.85rem] leading-relaxed text-[#6B7280]">
                This calculator provides an estimate based on a 2.5% Zakat rate. For questions about
                Zakat eligibility, Nisab, assets, liabilities, or specific Islamic rulings, please
                consult a qualified scholar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
