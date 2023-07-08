import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex flex-1 items-center bg-[#14161d] py-4">
      <View>
        <Text className="text-5xl font-semibold">
          $12,401<Text className="font-medium text-3xl">.90</Text>
        </Text>
        <View className="flex flex-row items-center justify-around">
          <View className="flex-row items-center">
            <Feather name="arrow-down-right" size={20} color="red" />
            <Text className="text-lg text-[#b5c0d0]">1.54%</Text>
          </View>
          <Text className="text-lg text-[#b5c0d0]">$234.50</Text>
        </View>
      </View>

      <View className="h-52 bg-slate-600 w-full"></View>

      <View className="mt-4 px-4 flex w-full">
        <View className="flex w-full">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-xl font-semibold">News</Text>
            <Text className="text-lg text-[#b5c0d0]">More</Text>
          </View>
          <FlatList
            data={[1, 2, 3]}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: 100,
                    height: 130,
                    borderRadius: 4,
                    backgroundColor: "#1f232b",
                  }}
                ></View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
