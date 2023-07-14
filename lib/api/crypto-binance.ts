import { MainClient } from "binance";

// not working due to missing crypto module
const client = new MainClient();

const LOCALE = "USD";

const fetchChartData = async () => {
  try {
    const response = await client.getHistoricalTrades({ symbol: "BTCUSD" });
    console.log(response);
  } catch (err) {
    console.warn(err);
  }
};

export const fetchCryptoPrice = async (ticker: string) => {
  try {
    const response = await client.getAvgPrice({ symbol: `${ticker}${LOCALE}` });
    console.log(response);
    return response;
  } catch (err) {
    console.warn(err);
  }
};
