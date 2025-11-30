"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[100px] flex justify-between items-center border border-gray-100 mb-5 shadow">
      <Image
        src="/food-logo.jpg"
        width={120}
        height={120}
        alt="logo"
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
    </div>
  );
};
export default Header;
