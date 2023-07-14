import { CoinList, GeckoIds } from "@/lib/crypto-list";
import { useState } from "react";
import { Image, ImageStyle, View } from "react-native";

const CoinGeckoIcon = ({ id }: { id: GeckoIds }) => {
  let icon;
  try {
    icon = CoinList[id].icon;
  } catch (err) {
    icon = require("../node_modules/cryptocurrency-icons/32/color/btc.png");
  }
  return <Image source={icon} style={$imageStyle} />;
};

export const CoinGeckoIconV2 = ({ url }: { url: string }) => {
  const [imageSource, setImageSource] = useState({ uri: url });

  return (
    <View>
      <Image
        source={imageSource}
        onError={() => {
          setImageSource({
            uri: "../node_modules/cryptocurrency-icons/32/color/btc.png",
          });
        }}
        style={$imageStyle}
      />
    </View>
  );
};

export default CoinGeckoIcon;

const $imageStyle: ImageStyle = {
  height: 35,
  width: 35,
};
