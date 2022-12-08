import internal from "stream";
import { cls } from "../libs/utils";

interface MapButtonProps {
  link?: string;
  id: any;
  text: string;
  [key: string]: any;
}

export default function MapButton({
  onClick,
  link,
  id,
  text,
  ...rest
}: MapButtonProps) {
  return (
    <a
      href={link}
      className="group relative inline-block overflow-hidden rounded bg-gray-200 px-3 font-medium text-pink-500"
    >
      <button id={id} onClick={onClick} {...rest}>
        <span className="absolute top-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-pink-500 opacity-90 transition-all duration-200 ease-out group-hover:h-full"></span>
        <span className="relative text-xs group-hover:text-white">{text}</span>
      </button>
    </a>
  );
}
