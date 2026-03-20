import { useState } from "react";
import CurrencySelect from "../components/CurrencySelect";
import DonationFormField from "../components/DonationFormField";
import { CURRENCIES } from "../constants/currencies";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { createTransaction } from "../services/api";

export default function DonationPage() {
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const { donationSlug } = useParams();

  async function submitTransaction() {
    const numAmount = Number(amount);
    const errors = [];

    if (!name.trim()) errors.push("Name is required");
    if (!numAmount || numAmount <= 0) errors.push("Amount is required");

    if (errors.length) {
      errors.forEach((err) => toast.error(err));
      return;
    }

    const newTransaction = {
      amount: numAmount,
      currency: selectedCurrency.code,
      from: name,
      message,
      slug: donationSlug,
    };

    try {
      await createTransaction(newTransaction);
      toast.success("Donation has been sent");
    } catch {
      toast.error("Something went wrong, please try again");
    }
  }

  return (
    <>
      <header className="flex items-center justify-center h-20 border-b-2 border-[#101115] mt-2">
        <h1 className="text-donathell-main font-bold text-5xl">Donathell</h1>
      </header>
      <main className="mx-auto h-[calc(100vh-5rem-0.5rem)] max-w-3xl w-full flex items-center justify-center text-donathell-secondary">
        <div className="flex items-center justify-center flex-col min-h-120 w-full mb-10">
          <div className="w-full bg-[#202123] py-4 px-6 rounded-t-xl h-18 flex gap-4 border border-[#404143]">
            <DonationFormField
              label="Name"
              inputPlaceholder="Senya"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <DonationFormField
              label="Amount"
              inputPlaceholder="200"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
            <CurrencySelect
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
          <textarea
            placeholder="Message..."
            className="w-full placeholder-[#c7ccc8a8] bg-[#202123] rounded-b-xl resize-none h-96 px-6 py-4 focus:outline-none shadow-lg/30 border-x border-b border-[#404143]"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button
            className="self-end bg-[#202123] mt-3 rounded-xl text-xl px-6 py-2 cursor-pointer hover:bg-[#363739] duration-200 shadow-md"
            onClick={submitTransaction}
          >
            Submit
          </button>
        </div>
      </main>
    </>
  );
}
