import CoinGeckoIcon from "@/components/CoinGeckoIcon";
import DynamicCryptoIcon from "@/components/DynamicCryptoIcon";
import Price from "@/components/Price";
import { Text, View } from "@/components/Themed";
import { useCryptoContext } from "@/lib/context/crypto-context";
import { USDformatter } from "@/lib/format";
import { CoinGeckoMarketResp } from "@/types/coin-gecko";
import { Nullable } from "@/types/util";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  LayoutAnimation,
  TouchableOpacity,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { LineChart } from "react-native-wagmi-charts";

const FAKE_NEWS = [
  {
    id: 1,
    title:
      "Bitcoin's three week loosing streak due to FTX downfall snapped by Powewll-inspired rally.",
    source: "Seeking Alpha",
    time: "2h",
    crypto: "Bitcoin",
  },
  {
    id: 2,
    title:
      "Bitcoin's three week loosing streak due to FTX downfall snapped by Powewll-inspired rally.",
    source: "Seeking Alpha",
    time: "2h",
    crypto: "Bitcoin",
  },
];

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
  const { coins, fetchChartData } = useCryptoContext();
  const [graphData, setGraphData] = useState<typeof DEFAULT_DATA>(DEFAULT_DATA);
  const [selectedCoin, setSelectedCoin] = useState("");

  useEffect(() => {
    if (selectedCoin) {
      fetchChartData(selectedCoin).then((resp) => {
        setGraphData(
          resp.prices.map((price) => {
            return {
              timestamp: price[0],
              value: price[1],
            };
          })
        );
      });
    }
  }, [selectedCoin]);

  useEffect(() => {
    if (coins && !selectedCoin) {
      setSelectedCoin("bitcoin");
    }
  }, [coins]);

  return (
    <View className="flex flex-1 items-center bg-[#14161d] py-4">
      <View>
        <Text className="text-5xl font-semibold">
          $12,401<Text className="font-medium text-3xl">.90</Text>
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
          {/* <View className="flex flex-row justify-between items-center">
            <Text className="text-xl font-semibold">News</Text>
            <Text className="text-lg text-[#b5c0d0]">More</Text>
          </View>

          <FlatList
            data={FAKE_NEWS}
            className="mt-2"
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View
                  key={item.id}
                  className="p-2"
                  style={{
                    width: 320,
                    height: 130,
                    borderRadius: 6,
                    backgroundColor: "#1f232b",
                  }}
                >
                  <Text className="text-lg font-semibold">{item.title}</Text>
                  <View
                    darkColor="transparent"
                    className="flex-row justify-between mt-auto"
                  >
                    <View
                      darkColor="transparent"
                      className="flex-row items-center"
                    >
                      <FontAwesome5 name="bitcoin" size={18} color="#f2a900" />
                      <Text className="text-[#a1a7af] ml-1">{item.crypto}</Text>
                    </View>
                    <Text className="text-[#a1a7af]">{item.source} - 2h</Text>
                  </View>
                </View>
              );
            }}
          /> */}

          <View className="mt-4">
            <FlatList
              data={coins}
              showsVerticalScrollIndicator={false}
              stickyHeaderIndices={[0]}
              ListHeaderComponent={() => {
                return (
                  <View className="flex mb-2">
                    <View className="h-40 w-full">
                      <LineChart.Provider data={graphData}>
                        <LineChart height={160} pointe>
                          <LineChart.Path color="#DD574D" />
                          <LineChart.CursorCrosshair />
                        </LineChart>
                        <LineChart.PriceText />
                        <LineChart.DatetimeText />
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
                    entering={FadeIn.duration(index * 1000)}
                    className="flex-row mb-4 items-center"
                  >
                    <TouchableOpacity
                      className="flex-row items-center"
                      onPress={() => setSelectedCoin(item.id)}
                    >
                      <CoinGeckoIcon id={item.id} />
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
