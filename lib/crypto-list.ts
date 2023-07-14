export const CoinList = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "btc",
    icon: require("../node_modules/cryptocurrency-icons/32/color/btc.png"),
  },
  ethereum: {
    name: "Ethereum",
    symbol: "eth",
    icon: require("../node_modules/cryptocurrency-icons/32/color/eth.png"),
  },
  ripple: {
    name: "XRP",
    symbol: "xrp",
    icon: require("../node_modules/cryptocurrency-icons/32/color/xrp.png"),
  },
  cardano: {
    name: "Cardano",
    symbol: "ada",
    icon: require("../node_modules/cryptocurrency-icons/32/color/ada.png"),
  },
  dogecoin: {
    name: "Dogecoin",
    symbol: "doge",
    icon: require("../node_modules/cryptocurrency-icons/32/color/doge.png"),
  },
  binancecoin: {
    name: "Binance Coin",
    symbol: "bnb",
    icon: require("../node_modules/cryptocurrency-icons/32/color/bnb.png"),
  },
  tether: {
    name: "Tether",
    symbol: "usdt",
    icon: require("../node_modules/cryptocurrency-icons/32/color/usdt.png"),
  },
  solana: {
    name: "Solana",
    symbol: "sol",
    icon: require("../node_modules/cryptocurrency-icons/32/color/sol.png"),
  },
  xdcnetwork: {
    name: "XDC Network",
    symbol: "xdc",
    icon: require("../node_modules/cryptocurrency-icons/32/color/xdn.png"),
  },
  polkadot: {
    name: "Polkadot",
    symbol: "dot",
    icon: require("../node_modules/cryptocurrency-icons/32/color/dot.png"),
  },
  uniswap: {
    name: "Uniswap",
    symbol: "uni",
    icon: require("../node_modules/cryptocurrency-icons/32/color/uni.png"),
  },
  chainlink: {
    name: "Chainlink",
    symbol: "link",
    icon: require("../node_modules/cryptocurrency-icons/32/color/link.png"),
  },
  litecoin: {
    name: "Litecoin",
    symbol: "ltc",
    icon: require("../node_modules/cryptocurrency-icons/32/color/ltc.png"),
  },
  binanceusd: {
    name: "Binance USD",
    symbol: "busd",
    icon: require("../node_modules/cryptocurrency-icons/32/color/bnb.png"),
  },
  "usd-coin": {
    name: "USD Coin",
    symbol: "busd",
    icon: require("../node_modules/cryptocurrency-icons/32/color/usdc.png"),
  },
  theta: {
    name: "Theta Network",
    symbol: "theta",
    icon: require("../node_modules/cryptocurrency-icons/32/color/theta.png"),
  },
  filecoin: {
    name: "Filecoin",
    symbol: "fil",
    icon: require("../node_modules/cryptocurrency-icons/32/color/fil.png"),
  },
  stellar: {
    name: "Stellar",
    symbol: "xlm",
    icon: require("../node_modules/cryptocurrency-icons/32/color/xlm.png"),
  },
  tezos: {
    name: "Tezos",
    symbol: "xtz",
    icon: require("../node_modules/cryptocurrency-icons/32/color/xtz.png"),
  },
  cosmos: {
    name: "Cosmos",
    symbol: "atom",
    icon: require("../node_modules/cryptocurrency-icons/32/color/atom.png"),
  },
  tron: {
    name: "TRON",
    symbol: "trx",
    icon: require("../node_modules/cryptocurrency-icons/32/color/trx.png"),
  },
  neo: {
    name: "NEO",
    symbol: "neo",
    icon: require("../node_modules/cryptocurrency-icons/32/color/neo.png"),
  },
  kusama: {
    name: "Kusama",
    symbol: "ksm",
    icon: require("../node_modules/cryptocurrency-icons/32/color/ksm.png"),
  },
  eos: {
    name: "EOS",
    symbol: "eos",
    icon: require("../node_modules/cryptocurrency-icons/32/color/eos.png"),
  },
  monero: {
    name: "Monero",
    symbol: "xmr",
    icon: require("../node_modules/cryptocurrency-icons/32/color/xmr.png"),
  },
  dash: {
    name: "Dash",
    symbol: "dash",
    icon: require("../node_modules/cryptocurrency-icons/32/color/dash.png"),
  },
  aave: {
    name: "Aave",
    symbol: "aave",
    icon: require("../node_modules/cryptocurrency-icons/32/color/aave.png"),
  },
  compound: {
    name: "Compound",
    symbol: "comp",
    icon: require("../node_modules/cryptocurrency-icons/32/color/comp.png"),
  },
  maker: {
    name: "Maker",
    symbol: "mkr",
    icon: require("../node_modules/cryptocurrency-icons/32/color/mkr.png"),
  },
  zcash: {
    name: "Zcash",
    symbol: "zec",
    icon: require("../node_modules/cryptocurrency-icons/32/color/zec.png"),
  },
  "wrapped-bitcoin": {
    name: "Wrapped Bitcoin",
    symbol: "wbtc",
    icon: require("../node_modules/cryptocurrency-icons/32/color/wbtc.png"),
  },
  "avalanche-2": {
    name: "Avalanche",
    symbol: "avax",
    icon: require("../node_modules/cryptocurrency-icons/32/color/avax.png"),
  },
  "bitcoin-cash": {
    name: "Bitcoin Cash",
    symbol: "bch",
    icon: require("../node_modules/cryptocurrency-icons/32/color/bch.png"),
  },
  "staked-ether": {
    name: "Ethereum",
    symbol: "steth",
    icon: require("../node_modules/cryptocurrency-icons/32/color/eth.png"),
  },
};

export type GeckoIds = keyof typeof CoinList;
