function DonationFormField({ label, inputPlaceholder }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="font-semibold text-xl">{label}:</span>
      <input
        type="text"
        className="bg-[#2b2c2e] rounded-md outline-none text-2xl placeholder-[#c7ccc8a8] p-1 max-w-48"
        placeholder={inputPlaceholder}
      />
    </div>
  );
}

export default DonationFormField;
