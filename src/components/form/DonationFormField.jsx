import Input from "../ui/Input";

function DonationFormField({ label, inputPlaceholder, value, onChange, type }) {
  return (
    <div className="flex flex-col gap-1 text-[#c1c2c1]">
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <Input
        className="max-w-60 p-1"
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
