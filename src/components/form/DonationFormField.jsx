import Input from "../ui/Input";

function DonationFormField({ label, inputPlaceholder, value, onChange, type }) {
  return (
    <div className="flex flex-col gap-1 text-[#c1c2c1]">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <Input
        className="w-full max-w-full p-1 sm:max-w-60"
        type={type}
        id={label}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DonationFormField;
