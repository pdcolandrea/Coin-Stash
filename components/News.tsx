import React from "react";
import { FlatList } from "react-native";
import { View, Text } from "./Themed";
import { FontAwesome5 } from "@expo/vector-icons";

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

function News() {
  return (
    <>
      <NewsHeader />
      <FlatList
        data={FAKE_NEWS}
        className="mt-2"
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              key={`news-${item.id}`}
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
                <View darkColor="transparent" className="flex-row items-center">
                  <FontAwesome5 name="bitcoin" size={18} color="#f2a900" />
                  <Text className="text-[#a1a7af] ml-1">{item.crypto}</Text>
                </View>
                <Text className="text-[#a1a7af]">{item.source} - 2h</Text>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}

const NewsHeader = () => {
  return (
    <View className="flex flex-row justify-between items-center">
      <Text className="text-xl font-semibold">News</Text>
      <Text className="text-lg text-[#b5c0d0]">More</Text>
    </View>
  );
};

export default News;
