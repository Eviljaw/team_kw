interface MainBoxProps {
  link?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default function MainBox({
  onClick,
  link,
  children,
  ...rest
}: MainBoxProps) {
  return (
    <a
      href={link}
      className="group relative inline-flex h-36 items-center justify-center overflow-hidden rounded-lg p-4 font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-purple-500"
    >
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-[rgb(230,0,126)]"></span>
      <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
      <span className="relative text-center text-white">{children}</span>
    </a>
  );
}
