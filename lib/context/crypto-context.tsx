import React, { useContext, useEffect, useState } from "react";
import { CoinGeckoHistoryResp, CoinGeckoMarketResp } from "@/types/coin-gecko";
import axios from "axios";
import { CoinGeckoError } from "../errors";
import { Nullable } from "@/types/util";

interface ICryptoContext {
  coins?: CoinGeckoMarketResp[];
  fetchChartData: (id: string, days?: number) => Promise<CoinGeckoHistoryResp>;
}

const gecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

const LOCALE = "usd";

// /coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
const CryptoContext = React.createContext<ICryptoContext>({});
export default function CryptoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [coins, setCoins] = React.useState<CoinGeckoMarketResp[]>([]);

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  const fetchCryptoPrices = async () => {
    console.log("fetching crypto data..");
    const response = await gecko.get(
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    if (response.status > 300) {
      console.log("coingecko error");
      throw new CoinGeckoError(response.data);
    }

    setCoins(response.data);

    return response.data as CoinGeckoMarketResp[];
  };

  const fetchChartData = async (id: string, days = 1) => {
    console.log("fetching chart data");
    const response = await gecko.get(
      `coins/${id}/market_chart?vs_currency=${LOCALE}&days=${days}`
    );
    if (response.status > 300) {
      console.warn("coingecko history error");
      throw new CoinGeckoError(response.data);
    }

    return response.data as CoinGeckoHistoryResp;
  };

  const value = {
    coins,
    fetchChartData,
  };

  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
}

export const useCryptoContext = () => useContext(CryptoContext);
