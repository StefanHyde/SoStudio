interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const btnStyles =
    variant === "primary"
      ? "bg-orange text-plage hover:bg-corail"
      : "bg-transparent border-1 border-orange text-orange hover:bg-orange hover:text-plage";

  return (
    <button
      className={`p-3 md:px-4 py-2 rounded-2xl text-p uppercase transition ease-in-out 300ms cursor-pointer ${btnStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
