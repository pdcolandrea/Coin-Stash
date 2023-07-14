import { USDformatter } from "@/lib/format";

export const useSplitPrice = (price?: number) => {
  let dollars = "$0";
  let cents = "00";
  if (!price) return { dollars, cents };

  const fullPrice = USDformatter.format(price);
  [dollars, cents] = fullPrice.split(".");
  return {
    dollars,
    cents,
  };
};
