import axios from "axios";
import { CoinGeckoError } from "../errors";
import { CoinGeckoHistoryResp, CoinGeckoMarketResp } from "@/types/coin-gecko";
import Toast from "react-native-root-toast";

const gecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

gecko.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      // error handling here
    }
  }
);

const LOCALE = "usd";

export const fetchCryptoList = async () => {
  console.log("fetching crypto list");
  const response = await gecko.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  if (response.status > 300) {
    console.log("coingecko error");
    throw new CoinGeckoError(response.data);
  }

  Toast.show("This is a message", {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });

  return response.data as CoinGeckoMarketResp[];
};

// 300 data points
export const fetchChartData = async (id: string, days: number) => {
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
