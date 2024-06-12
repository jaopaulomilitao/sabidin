"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { GoVideo } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { LuDoorOpen, LuBrain } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import CardSubtopico from "../../components/CardSubtopicos";
import NavBar from "@/components/NavBar/NavBar";

export default function Modules() {
  const router = useRouter();

  const handleClickNextInteractiveStory = () => {
    alert("Historia interativa clicada!");
  };

  const handleClickBack = () => {
    router.push("/content");
  };

  const handleLearnClickWorking = () => {
    router.push("/learning");
  };

  const handleLearnClick = () => {
    alert("Aprender clicado!");
  };

  return (
    <>
      <main className="flex flex-col items-center w-full h-screen px-10 lg:px-28 py-4 md:py-8 lg:py-8 bg-baseWhite">
        <NavBar></NavBar>
        <div
          className="w-full flex justify-start"
          style={{ marginLeft: "60px" }}
        >
          <Button
            className="w-[240px] h-[48px] bg-baseGreen text-white font-semibold flex items-center"
            onClick={handleClickBack}
          >
            <LuDoorOpen className="mr-2 text-sm" />
            Escolher outro módulo
          </Button>
        </div>

        <div
          className="flex flex-col gap-4 items-center bg-white p-4 rounded-3xl"
          style={{ width: "1216px", height: "320px", margin: "24px 104px" }}
        >
          <div className="flex flex-col gap-4 items-center bg-white p-4">
            <p className="font-bold text-baseYellow tracking-wider text-lg">
              MÓDULO 1
            </p>

            <div className="font-extrabold text-baseBlue text-2xl mt-4">
              Introdução à Educação Financeira
            </div>

            <Image
              src="/img/capa-modulo1.svg"
              alt="Ilustração de capa modulo 1"
              width={331}
              height={280}
              className="rounded-3xl"
            />

            <Button
              className="w-[250px] h-[48px] bg-baseBlue text-white font-semibold flex items-center justify-center"
              onClick={handleClickNextInteractiveStory}
            >
              <GoVideo className="mr-2 text-lg text-white" />
              Assistir história interativa
            </Button>
          </div>
        </div>

        <div
          className="flex justify-between mt-4"
          style={{ width: "1216px", margin: "0 104px" }}
        >
          <CardSubtopico
            icon={MdOutlineAttachMoney}
            title="O QUE É DINHEIRO?"
            onClick={handleLearnClickWorking}
          />
          <CardSubtopico
            icon={IoWalletOutline}
            title="POR QUE O DINHEIRO É IMPORTANTE?"
            onClick={handleLearnClick}
          />
          <CardSubtopico
            icon={TbPigMoney}
            title="NOÇÕES BÁSICAS DE ECONOMIA: POUPAR, GASTAR, DOAR E INVESTIR."
            onClick={handleLearnClick}
          />
          <CardSubtopico
            icon={LuBrain}
            title="COMO FAZER ESCOLHAS INTELIGENTES COM DINHEIRO."
            onClick={handleLearnClick}
          />
        </div>
      </main>

      <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
        <div className="w-full max-w-[1410px] flex justify-between px-4">
          <div className="flex-1 h-[288px] bg-baseWhite rounded-3xl mx-20"></div>

          <div className="flex-1 h-[288px] bg-baseWhite rounded-3xl mx-20"></div>
          <div className="flex-1 h-[288px] bg-baseWhite rounded-3xl mx-20"></div>
        </div>
      </div>
    </>
  );
}
