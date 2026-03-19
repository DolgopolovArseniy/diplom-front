import usdt from "../assets/images/usdt.png";
import eth from "../assets/images/eth.png";
import btc from "../assets/images/btc.png";
import sol from "../assets/images/sol.png";
import eu from "../assets/images/eu.png";
import us from "../assets/images/us.png";
import ua from "../assets/images/ua.png";

export const CURRENCIES = [
  {
    label: "USDT",
    logo: usdt,
    crypto: true,
  },
  {
    label: "SOL",
    logo: sol,
    crypto: true,
  },
  {
    label: "ETH",
    logo: eth,
    crypto: true,
  },
  {
    label: "BTC",
    logo: btc,
    crypto: true,
  },
  {
    label: "EUR",
    logo: eu,
    crypto: false,
  },
  {
    label: "USD",
    logo: us,
    crypto: false,
  },
  {
    label: "UAH",
    logo: ua,
    crypto: false,
  },
];
