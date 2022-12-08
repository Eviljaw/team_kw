import { cls } from "../libs/utils";

interface ButtonProps {
  large?: boolean;
  link?: string;
  kakao?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  link,
  children,
  kakao,
  ...rest
}: ButtonProps) {
  return (
    <a href={link}>
      <button
        {...rest}
        className={cls(
          "mb-4 w-full rounded-md border border-transparent px-4 font-extrabold",
          large ? "py-3 text-base" : "py-3 text-sm",
          kakao
            ? "focus:ring-3 bg-[rgb(249,224,0)] text-[rgb(59,28,28)] hover:bg-yellow-500 focus:outline-none focus:ring-yellow-600"
            : "focus:ring-3 bg-[rgb(23,206,95)] text-white hover:bg-green-600 focus:outline-none focus:ring-green-800"
        )}
      >
        {children}
      </button>
    </a>
  );
}
