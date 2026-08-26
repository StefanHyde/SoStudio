interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const btnStyles = {
    primary: "bg-orange text-plage hover:bg-corail uppercase",
    secondary: "bg-transparent border border-orange text-orange hover:bg-orange hover:text-plage normal-case",
    tertiary: "bg-orange text-plage hover:bg-corail normal-case p-2! text-sm! rounded-xl!",
  };
  return (
    <button
      className={`p-3 md:p-4 rounded-2xl text-sm md:text-p  transition ease-in-out 300ms cursor-pointer ${btnStyles[variant]}${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
