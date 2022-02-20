import { ERC20Token } from "./constants/addresses";

// interval of price check (ms)
export const interval = 1_500;

export const renderInterval = Math.floor(interval / 2);

export const loanAmount = 33333;
export const diffAmount = 10; // Not enough amount to return loan

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

/**
 * Token pair the bot trading
 * baseToken -> tradingToken -> baseToken (ex: DAI -> WETH -> DAI)
 * profits are sent in baseToken if a transaction is successful.
 */

export const baseTokens = [ERC20Token.DAI, ERC20Token.USDC];

export const tradingTokens = [
  ERC20Token.DAI,
  ERC20Token.WETH,
  ERC20Token.USDC,
  // ERC20Token.USDT,
  ERC20Token.WMATIC,
  ERC20Token.WBTC,
];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0xaD8064198dCFC8Cc5e6EE4a65C4841ec6295a46c
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string =
  "0xaD8064198dCFC8Cc5e6EE4a65C4841ec6295a46c";

/**
 * The bot can trade on UniswapV2 fork dexes(ex. SushiSwap) and UniswapV3
 * For UniswapV2, you can trade between any token pair, but for UniswapV3, you have to check their pool fees and list them on src/price/uniswap/v3/fee.ts.
 */
// protocols the bot will use
export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP,POLYGON_UNISWAP_V3";

export const gasLimit = 15000000;
export const gasPrice = 203; // gwei

export const routeParts = [
  [10000],
  [8000, 2000],
  [5000, 4000, 1000],
  [5000, 3000, 1000, 1000],
  [3000, 2000, 2000, 2000, 1000],
  [2000, 2000, 2000, 2000, 1000, 1000],
];
