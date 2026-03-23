function DonationFormField({ label, inputPlaceholder, value, onChange, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        className="bg-[#2b2c2e] rounded-md outline-none text-xl placeholder-[#c7ccc8a8] p-1 max-w-60 border border-[#959697] h-9 focus:ring-4 focus:ring-donathell-main focus:shadow-donathell-main duration-100"
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DonationFormField;
