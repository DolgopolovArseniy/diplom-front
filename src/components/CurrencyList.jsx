import { CURRENCIES } from "../constants/currencies";

function CurrencyList({
  isOpen,
  selectedCurrency,
  setIsOpen,
  setSelectedCurrency,
  crypto = true,
}) {
  return (
    <ul className="flex flex-col">
      {CURRENCIES.filter((cur) => (crypto ? cur.crypto : !cur.crypto)).map(
        (cur) => (
          <li
            key={cur.label}
            className={`text-2xl flex items-center justify-start px-4 gap-4 cursor-pointer hover:bg-[#555658] duration-200 py-2 border-b border-[#959697] first:border-t-0 last:border-b-0 ${!crypto ? "last:rounded-b-xl" : ""} ${selectedCurrency.label === cur.label ? "bg-[#555658]" : ""}`}
            onClick={() => {
              setSelectedCurrency(cur);
              setIsOpen(!isOpen);
            }}
          >
            <img src={cur.logo} alt={cur.label} className="w-8" />
            <span>{cur.label}</span>
          </li>
        ),
      )}
    </ul>
  );
}

export default CurrencyList;
