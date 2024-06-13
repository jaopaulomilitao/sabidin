"use client";

import Link from "next/link";
import { LuBookMarked } from "react-icons/lu";
import { LuShoppingBasket } from "react-icons/lu";
import { FaCubes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="flex bg-white w-full max-w-lg lg:w-[1024px] h-auto gap-9 fixed bottom-0 z-20 items-center justify-center mx-auto rounded-t-3xl drop-shadow-xl"
        suppressHydrationWarning
      >
        <Link href="/modules">
          <div className="w-20 h-20 flex flex-col items-center justify-center opacity-30 hover:opacity-100 hover:border-b-4 hover:border-baseBlue transition duration-300">
            <LuBookMarked className="text-baseBlue text-2xl mb-1" />
            <p className="text-baseBlue font-bold text-xs">aprender</p>
          </div>
        </Link>
        <Link href="/">
          <div className="w-20 h-20 flex flex-col items-center justify-center opacity-30 hover:opacity-100 hover:border-b-4 hover:border-baseBlue transition duration-300">
            <LuShoppingBasket className="text-baseBlue text-2xl mb-1" />
            <p className="text-baseBlue font-bold text-xs">loja</p>
          </div>
        </Link>
        <Link href="https://rounded-boiling-clave.glitch.me">
          <div className="w-20 h-20 flex flex-col items-center justify-center opacity-30 hover:opacity-100 hover:border-b-4 hover:border-baseBlue transition duration-300">
            <FaCubes className="text-baseBlue text-2xl mb-1" />
            <p className="text-baseBlue font-bold text-xs">playground</p>
          </div>
        </Link>
        <Link href="/">
          <div className="w-20 h-20 flex flex-col items-center justify-center opacity-30 hover:opacity-100 hover:border-b-4 hover:border-baseBlue transition duration-300">
            <CgProfile className="text-baseBlue text-2xl mb-1" />
            <p className="text-baseBlue font-bold text-xs">perfil</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
