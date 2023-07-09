import React, { useContext, useEffect } from "react";
import { CoinGeckoMarketResp } from "@/types/coin-gecko";
import axios from "axios";
import { CoinGeckoError } from "../errors";

interface ICryptoContext {
  coins?: CoinGeckoMarketResp[];
}

const gecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

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

  const value = {
    coins,
  };

  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
}

export const useCryptoContext = () => useContext(CryptoContext);
