import { useState, useEffect, useRef } from "react";
import { ChevronDown, Library } from "lucide-react";
import { CURRENCIES } from "../constants/currencies";
import CurrencyList from "./CurrencyList";

function CurrencySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
        setSelectedCurrency;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className="bg-[#2b2c2e] rounded-md text-2xl pl-2 pr-1 h-10 border border-[#959697] flex items-center justify-between gap-2 cursor-pointer hover:bg-[#555658] duration-200 w-36"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedCurrency.logo}
          alt={selectedCurrency.label}
          className="w-8"
        />
        <span>{selectedCurrency.label}</span>
        <ChevronDown
          size={23}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-[#2b2c2e] rounded-xl w-36 border border-[#959697]">
          <p className="font-light px-2 pb-1 border-b border-[#555658]">
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
      )}
    </div>
  );
}

export default CurrencySelect;
