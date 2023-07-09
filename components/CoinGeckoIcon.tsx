import { CoinList, GeckoIds } from "@/lib/crypto-list";
import { Image, ImageStyle } from "react-native";

const CoinGeckoIcon = ({ id }: { id: GeckoIds }) => {
  let icon;
  try {
    icon = CoinList[id].icon;
  } catch (err) {
    icon = require("../node_modules/cryptocurrency-icons/32/color/btc.png");
  }
  return <Image source={icon} style={$imageStyle} />;
};

export default CoinGeckoIcon;

const $imageStyle: ImageStyle = {
  height: 35,
  width: 35,
};
