import { useState, useEffect, useRef } from "react";
import { ChevronDown, Library } from "lucide-react";

import CurrencyList from "./CurrencyList";

function CurrencySelect({ selectedCurrency, setSelectedCurrency }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex flex-col">
      <label>Currency</label>
      <button
        className={`bg-[#2b2c2e] rounded-md text-xl pl-2 pr-1 h-9 border border-[#959697] flex items-center justify-around cursor-pointer hover:bg-[#555658] duration-100 w-38 ${isOpen && "ring-4 ring-donathell-main"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedCurrency.logo}
          alt={selectedCurrency.code}
          className="w-7"
        />
        <span>{selectedCurrency.code}</span>
        <ChevronDown
          size={23}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden absolute z-10 top-16 right-0.5 bg-[#2b2c2e] rounded-xl w-36 border border-[#959697] ${isOpen ? "opacity-100 max-h-100" : "opacity-0 max-h-0"} transition-all duration-200`}
      >
        <p className="font-light px-2 pb-0.5 border-b border-[#555658]">
          Crypto
        </p>
        <CurrencyList
          isOpen={isOpen}
          selectedCurrency={selectedCurrency}
          crypto={true}
          setSelectedCurrency={setSelectedCurrency}
          setIsOpen={setIsOpen}
        />
        <p className="font-light px-2 pb-1 border-y border-[#555658]">Fiat</p>
        <CurrencyList
          isOpen={isOpen}
          selectedCurrency={selectedCurrency}
          crypto={false}
          setSelectedCurrency={setSelectedCurrency}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}

export default CurrencySelect;
