import Link from "next/link";

interface ButtonProps {
  to: string;
  type?: "info" | "danger" | "warning"; // Restrição do tipo a valores específicos
  children: React.ReactNode;
  className?: string;
}

type TypeColors = "bg-zoho-blue" | "bg-zoho-red" | "bg-zoho-yellow";

// Função que retorna o tipo correto
const types = (key: "info" | "danger" | "warning"): TypeColors => {
  const map: { [key in "info" | "danger" | "warning"]: TypeColors } = {
    info: "bg-zoho-blue",
    danger: "bg-zoho-red",
    warning: "bg-zoho-yellow",
  };
  return map[key]; // Acesso à chave de forma segura
};

export default function Button({
  to,
  type = "danger",
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={to}
      className={`${types(
        type
      )} text-white px-[25px] md:px-[30px] py-[14px] md:py-[18px] rounded-[2px] text-[14px] font-medium uppercase ${className}`}
    >
      {children}
    </Link>
  );
}
