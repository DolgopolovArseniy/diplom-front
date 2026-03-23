function DonationFormField({ label, inputPlaceholder, value, onChange, type }) {
  return (
    <div className="flex flex-col gap-1 text-[#c1c2c1]">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="bg-[#2b2c2e] rounded-md outline-none placeholder-[#c7ccc8a8] p-1 max-w-60 border border-[#959697] h-9 focus:ring-4 focus:ring-donathell-main  duration-100 text-donathell-secondary"
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DonationFormField;
