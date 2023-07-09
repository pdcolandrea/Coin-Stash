import React from "react";
import { Image, ImageStyle } from "react-native";
import crypto from "cryptocurrency-icons";

const DynamicCryptoIcon = ({
  network,
  symbol,
}: {
  network: string;
  symbol: string;
}) => {
  network = network.toLowerCase();

  let icon = require("../node_modules/cryptocurrency-icons/32/color/btc.png");
  //   try {
  //     icon = require(`../node_modules/cryptocurrency-icons/32/color/${symbol}.png`);
  //     return <Image source={icon} style={$imageStyle} />;
  //   } catch (err) {
  //     console.warn(err);
  //   }

  try {
    switch (network) {
      case "bitcoin":
        icon = require("../node_modules/cryptocurrency-icons/32/color/btc.png");
        break;
      case "ethereum":
        icon = require("../node_modules/cryptocurrency-icons/32/color/eth.png");
        break;
      case "tether":
        icon = require("../node_modules/cryptocurrency-icons/32/color/tether.png");
        break;
      default:
        icon = require("../node_modules/cryptocurrency-icons/32/color/btc.png");
        break;
    }
  } catch (err) {
    icon = require("../node_modules/cryptocurrency-icons/32/color/generic.png");
  }

  return <Image source={icon} style={$imageStyle} />;
};

const $imageStyle: ImageStyle = {
  height: 35,
  width: 35,
};

export default DynamicCryptoIcon;
