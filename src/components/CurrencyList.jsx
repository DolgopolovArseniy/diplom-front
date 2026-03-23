import { CURRENCIES } from "../constants/currencies";

function CurrencyList({
  isOpen,
  selectedCurrency,
  setIsOpen,
  setSelectedCurrency,
  crypto = true,
}) {
  return (
    <ul className="flex flex-col p-1.5 gap-1">
      {CURRENCIES.filter((cur) => (crypto ? cur.crypto : !cur.crypto)).map(
        (cur) => (
          <li
            key={cur.code}
            className={`flex items-center justify-start px-4 gap-4 cursor-pointer hover:bg-[#555658] duration-200 py-1 rounded-lg ${selectedCurrency.code === cur.code ? "bg-[#555658]" : ""}`}
            onClick={() => {
              setSelectedCurrency(cur);
              setIsOpen(!isOpen);
            }}
          >
            <img src={cur.logo} alt={cur.code} className="w-8" />
            <span>{cur.code}</span>
          </li>
        ),
      )}
    </ul>
  );
}

export default CurrencyList;
