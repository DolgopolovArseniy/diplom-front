function DonationFormField({ label, inputPlaceholder, value, onChange, type }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="font-semibold text-xl">{label}:</span>
      <input
        type={type}
        className="bg-[#2b2c2e] rounded-md outline-none text-2xl placeholder-[#c7ccc8a8] p-1 max-w-48 border border-[#959697] h-10 focus:border-donathell-main focus:shadow-sm/40 focus:shadow-donathell-main duration-100"
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DonationFormField;
