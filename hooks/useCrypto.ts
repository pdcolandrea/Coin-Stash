import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchChartData, fetchCryptoList } from "@/lib/api/crypto-gecko";

const QUERY_KEYS = {
  CRYPTO_LIST: "CRYPTO_LIST",
  CRYPTO: "CRYPTO_",
};

const generateHistoricalKey = (id: string, days: number) => [
  QUERY_KEYS.CRYPTO,
  id,
  days,
];

export const useGetCryptoList = () => {
  const queryClient = useQueryClient();
  return useQuery([QUERY_KEYS.CRYPTO_LIST], fetchCryptoList, {
    staleTime: 180000,
    retry: false,
    onSuccess: (data) => {
      let prefetched = 0;
      for (const resp of data) {
        if (prefetched >= 5) {
          break;
        }
        const key = generateHistoricalKey(resp.id, 1);
        queryClient.prefetchQuery(key, () => fetchChartData(resp.id, 1));
        prefetched++;
      }
    },
  });
};

export const useGetHistoricalData = (id: string, days = 1) => {
  return useQuery(
    generateHistoricalKey(id, days),
    () => fetchChartData(id, days),
    {
      staleTime: 180000,
      enabled: !!id,
    }
  );
};
