import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      <Image src="logo.svg" alt="Logo" width={40} height={40} />
      <span className="text-2xl sm:text-4xl font-bold text-brand-400">
        ShowShuffle
      </span>
    </div>
  );
};

export default Logo;
