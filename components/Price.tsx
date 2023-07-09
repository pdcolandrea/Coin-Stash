import { TextStyle } from "react-native";
import { Text, View } from "./Themed";
import { Feather } from "@expo/vector-icons";

const Price = ({ change }: { change: number }) => {
  let arrow = {
    name: "arrow-down-right",
    color: "#DD574D",
  };
  if (change > 0) {
    arrow = {
      name: "arrow-up-right",
      color: "#54b082",
    };
  } else if (change < 0.01 && change > 0) {
    arrow = {
      name: "minus",
      color: "yellow",
    };
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Feather name={arrow.name} size={20} color={arrow.color} />
      <Text style={{ fontSize: 18, marginLeft: 8 }}>{change.toFixed(2)}%</Text>
    </View>
  );
};

export default Price;
