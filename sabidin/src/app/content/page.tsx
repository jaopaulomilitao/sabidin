"use client";

import Image from "next/image";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Content() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/modules");
  };

  return (
    <main className="flex flex-col items-center w-full h-screen px-10 lg:px-28 py-4 md:py-8 lg:py-8 bg-baseWhite">
      <div className="w-full flex justify-start">
        <Image
          src="/img/logo-sabidin-horizontal.svg"
          alt="Logo"
          width={176}
          height={32}
        />
      </div>

      <div
        className="flex flex-col gap-4 items-center bg-white p-4 rounded-3xl"
        style={{ width: "494px", height: "719px", margin: "24px 55px" }}
      >
        <div className="flex flex-col gap-4 items-center bg-white p-4">
        <p className="font-bold text-baseYellow  tracking-wider text-lg">
            MÓDULO 1
          </p>

          <Image
            src="/img/beto_triste.svg"
            alt="Ilustração de conteúdo"
            width={331}
            height={280}
            className="rounded-3xl"
          />

          <div className="font-extrabold text-baseBlue text-2xl mt-4">
            Introdução à Educação Financeira
          </div>

          <div className="text-xs text-justify mt-2">
            Vamos descobrir o que é{" "}
            <span className="font-bold text-baseBlue">dinheiro</span>, sua{" "}
            <span className="font-bold text-baseBlue">importância</span> e como
            ele facilita nossas trocas diárias. Aprenderemos noções básicas de{" "}
            <span className="font-bold text-baseBlue">economia</span>, como{" "}
            <span className="font-bold text-baseBlue">
              poupar, gastar, doar e investir,
            </span>{" "}
            além de fazer escolhas inteligentes com o{" "}
            <span className="font-bold text-baseBlue">dinheiro</span>. Este
            módulo é o primeiro passo para entender e{" "}
            <span className="font-bold text-baseBlue">usar o dinheiro</span> de
            forma divertida e fácil!
          </div>

          <Button
            className="w-full sm:w-72 bg-baseBlue h-12 text-white font-semibold"
            onClick={handleClick}
          >
            Acessar módulo
          </Button>
        </div>
      </div>
    </main>
  );
}
