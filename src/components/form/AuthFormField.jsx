export default function AuthFormField({ label, children, ...props }) {
  return (
    <div className="flex flex-col self-start w-full gap-0.5">
      <label {...props}>{label}</label>
      {children}
    </div>
  );
}
