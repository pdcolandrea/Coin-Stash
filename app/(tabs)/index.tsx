import DynamicCryptoIcon from "@/components/DynamicCryptoIcon";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useCryptoContext } from "@/lib/context/crypto-context";
import { USDformatter } from "@/lib/format";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { FlatList, Image } from "react-native";

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

export default function TabOneScreen() {
  const { coins } = useCryptoContext();

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

      <View className="h-40 w-full"></View>

      <View className="mt-4 px-4 flex w-full">
        <View className="flex w-full">
          <View className="flex flex-row justify-between items-center">
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
          />

          <View className="mt-4">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Text className="font-bold text-lg">Crypto List</Text>
                <View className="w-[2px] h-full bg-red-100 mx-2" />
                <Text className="text-lg text-[#b5c0d0]">24H</Text>
              </View>
              <Text className="text-lg text-[#b5c0d0]">Edit</Text>
            </View>

            <FlatList
              data={coins}
              className="mt-2"
              showsVerticalScrollIndicator={false}
              // StickyHeaderComponent={() => {
              //   return <View></View>;
              // }}
              renderItem={({ item, index }) => {
                return (
                  <View className="flex-row mb-4 items-center">
                    <DynamicCryptoIcon
                      network={item.name}
                      symbol={item.symbol}
                    />
                    <View className="items-center flex-row justify-between flex-1">
                      <View className="flex-col ml-2">
                        <Text className="text-lg">{item.name}</Text>
                        <Text>{USDformatter.format(item.current_price)}</Text>
                      </View>
                      <View className="flex-row items-center ">
                        <Feather
                          name="arrow-down-right"
                          size={20}
                          color="#DD574D"
                        />
                        <Text className="text-lg text-white ml-2">
                          {item.price_change_percentage_24h}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
