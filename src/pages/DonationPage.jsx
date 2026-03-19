import CurrencySelect from "../components/CurrencySelect";
import DonationFormField from "../components/DonationFormField";

export default function DonationPage() {
  return (
    <>
      <header className="flex items-center justify-center h-20 border-b-2 border-[#101115] mt-2">
        <h1 className="text-donathell-main font-bold text-5xl">Donathell</h1>
      </header>
      <main className="mx-auto h-[calc(100vh-5rem-0.5rem)] max-w-3xl w-full flex items-center justify-center text-donathell-secondary">
        <div className="flex items-center justify-center flex-col min-h-120 w-full mb-10">
          <div className="w-full bg-[#202123] py-4 px-6 rounded-t-xl h-18 flex gap-4 border border-[#404143]">
            <DonationFormField label="Name" inputPlaceholder="Senya" />
            <DonationFormField label="Amount" inputPlaceholder="200" />
            <CurrencySelect />
          </div>
          <textarea
            placeholder="Message..."
            className="w-full placeholder-[#c7ccc8a8] bg-[#202123] rounded-b-xl resize-none h-96 px-6 py-4 focus:outline-none shadow-lg/30 border-x border-b border-[#404143]"
          ></textarea>
          <button className="self-end bg-[#202123] mt-3 rounded-xl text-xl px-6 py-2 cursor-pointer hover:bg-[#363739] duration-200 shadow-md">
            Submit
          </button>
        </div>
      </main>
    </>
  );
}
