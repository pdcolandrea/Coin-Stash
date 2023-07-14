import { useEffect, useState } from "react";
import { FlatList, LayoutAnimation, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import Animated, { FadeIn } from "react-native-reanimated";
import { LineChart } from "react-native-wagmi-charts";
import { Feather } from "@expo/vector-icons";

import { USDformatter } from "@/lib/format";
import { useGetCryptoList, useGetHistoricalData } from "@/hooks/useCrypto";
import Price from "@/components/Price";
import { CoinGeckoIconV2 } from "@/components/CoinGeckoIcon";

import { useNavigation } from "expo-router";
import { CoinGeckoMarketResp } from "@/types/coin-gecko";
import { Nullable } from "@/types/util";
import { useSplitPrice } from "@/hooks/usePrice";
import News from "@/components/News";

const DEFAULT_DATA = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33575.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

export default function TabOneScreen() {
  const [selectedCoin, setSelectedCoin] =
    useState<Nullable<CoinGeckoMarketResp>>(null);
  const { data: coins } = useGetCryptoList();
  const { data: chartData } = useGetHistoricalData(selectedCoin?.id ?? "", 1);
  const { dollars, cents } = useSplitPrice(selectedCoin?.current_price);
  const navigation = useNavigation();

  useEffect(() => {
    if (coins && !selectedCoin) {
      // @ts-ignore gets the fetching process started
      setSelectedCoin({
        id: "bitcoin",
        name: "Bitcoin",
      });
    }
  }, [coins]);

  useEffect(() => {
    if (selectedCoin?.name === "") return;

    navigation.setOptions({
      title: selectedCoin?.name,
    });
  }, [selectedCoin]);

  return (
    <View className="flex flex-1 items-center dark:bg-[#14161d] py-4">
      <View className="flex justify-center min-w-[50%]">
        <Text className="text-5xl font-semibold text-center">
          {dollars}
          <Text className="font-medium text-3xl">.{cents}</Text>
        </Text>
        <View className="flex flex-row items-center justify-around">
          <View className="flex-row items-center">
            <Feather name="arrow-down-right" size={20} color="#DD574D" />
            <Text className="text-lg text-[#b5c0d0] ml-1">1.54%</Text>
          </View>
          <Text className="text-lg text-[#b5c0d0]">$234.50</Text>
        </View>
      </View>

      <View className="mt-4 px-4 flex w-full">
        <View className="flex w-full">
          {/* <News /> */}

          <View className="mt-4 pb-20">
            <FlatList
              data={coins}
              keyExtractor={(_, index) => `coin-${index}`}
              showsVerticalScrollIndicator={false}
              stickyHeaderIndices={[0]}
              ListHeaderComponent={() => {
                return (
                  <View className="flex mb-2">
                    <View className="h-40 w-full">
                      <LineChart.Provider
                        data={
                          chartData?.prices.map((price) => {
                            return {
                              timestamp: price[0],
                              value: price[1],
                            };
                          }) ?? DEFAULT_DATA
                        }
                      >
                        <LineChart height={160}>
                          <LineChart.Path color="#DD574D" />
                          <LineChart.CursorCrosshair>
                            <LineChart.Tooltip />
                          </LineChart.CursorCrosshair>
                        </LineChart>
                      </LineChart.Provider>
                    </View>
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center">
                        <Text className="font-bold text-lg">Crypto List</Text>
                        <View className="w-[2px] h-full bg-red-100 mx-2" />
                        <Text className="text-lg text-[#b5c0d0]">24H</Text>
                      </View>
                      <Text className="text-lg text-[#b5c0d0]">Edit</Text>
                    </View>
                  </View>
                );
              }}
              renderItem={({ item, index }) => {
                return (
                  <Animated.View
                    entering={FadeIn.delay(Math.min(index * 250, 3000))}
                    className="flex-row mb-4 items-center"
                  >
                    <TouchableOpacity
                      className="flex-row items-center"
                      onPress={() => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.Presets.easeInEaseOut
                        );
                        setSelectedCoin(item);
                      }}
                    >
                      <CoinGeckoIconV2 url={item.image} />
                      <View className="items-center flex-row justify-between flex-1">
                        <View className="flex-col ml-2">
                          <Text className="text-lg">{item.name}</Text>
                          <Text>{USDformatter.format(item.current_price)}</Text>
                        </View>
                        <Price change={item.price_change_percentage_24h} />
                      </View>
                    </TouchableOpacity>
                  </Animated.View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
