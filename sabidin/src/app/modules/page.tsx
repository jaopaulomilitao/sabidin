"use client"; 

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
// import { TfiVideoClapper } from "react-icons/tfi";
import { GoVideo } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { LuDoorOpen, LuBrain } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

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
  }

  return (
    <>
      <main className="flex flex-col items-center w-full h-screen px-10 lg:px-28 py-4 md:py-8 lg:py-8 bg-baseWhite">
        <div className="w-full flex justify-start" style={{ marginLeft: "60px" }}>
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

        <div className="flex justify-between mt-4" style={{ width: "1216px", margin: "0 104px" }}>
          {/* Div 1 */}
          <div className="relative flex flex-col justify-between w-[280px] h-[280px] bg-baseBlue rounded-3xl p-4">
            <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-white rounded-[10px]" style={{ marginLeft: "17px", marginTop: "10px" }} />
            <Button
              className="absolute bottom-4 left-4 w-[240px] h-[48px] bg-baseGreen text-black font-semibold"
              onClick={handleLearnClickWorking}
            >
              <FiArrowUpRight className="absolute top-[10px] left-[10px] text-black text-2xl" />
              Aprender
            </Button>
            <MdOutlineAttachMoney className="absolute top-[23px] left-[29px] text-black text-2xl" />
            <p className="text-2xl text-white font-extrabold flex items-center justify-center h-full">
              O QUE É DINHEIRO?
            </p>
          </div>

          {/* Div 2 */}
          <div className="relative flex flex-col justify-between w-[280px] h-[280px] bg-baseBlue rounded-3xl p-4" style={{ marginLeft: "24px" }}>
            <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-white rounded-[10px]" style={{ marginLeft: "17px", marginTop: "10px" }} />
            <Button
              className="absolute bottom-4 left-4 w-[240px] h-[48px] bg-baseGreen text-black font-semibold"
              onClick={handleLearnClick}
            >
              <FiArrowUpRight className="absolute top-[10px] left-[10px] text-black text-2xl" />
              Aprender
            </Button>
            <IoWalletOutline className="absolute top-[23px] left-[29px] text-black text-2xl" />
            <p className="text-xl text-white font-extrabold flex items-center justify-center h-full">
              POR QUE O DINHEIRO É IMPORTANTE?
            </p>
          </div>

          {/* Div 3 */}
          <div className="relative flex flex-col justify-between w-[280px] h-[280px] bg-baseBlue rounded-3xl p-4" style={{ marginLeft: "24px" }}>
            <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-white rounded-[10px]" style={{ marginLeft: "17px", marginTop: "10px" }} />
            <Button
              className="absolute bottom-4 left-4 w-[240px] h-[48px] bg-baseGreen text-black font-semibold"
              onClick={handleLearnClick}
            >
              <FiArrowUpRight className="absolute top-[10px] left-[10px] text-black text-2xl" />
              Aprender
            </Button>
            <TbPigMoney className="absolute top-[23px] left-[29px] text-black text-2xl" />
            <p className="text-xl text-white font-extrabold flex items-center justify-center h-full">
              NOÇÕES BÁSICAS DE ECONOMIA: POUPAR, GASTAR, DOAR E INVESTIR.
            </p>
          </div>

          {/* Div 4 */}
          <div className="relative flex flex-col justify-between w-[280px] h-[280px] bg-baseBlue rounded-3xl p-4" style={{ marginLeft: "24px" }}>
            <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-white rounded-[10px]" style={{ marginLeft: "17px", marginTop: "10px" }} />
            <Button
              className="absolute bottom-4 left-4 w-[240px] h-[48px] bg-baseGreen text-black font-semibold"
              onClick={handleLearnClick}
            >
              <FiArrowUpRight className="absolute top-[10px] left-[10px] text-black text-2xl" />
              Aprender
            </Button>
            <LuBrain className="absolute top-[23px] left-[29px] text-black text-2xl" />
            <p className="text-xl text-white font-extrabold flex items-center justify-center h-full">
              COMO FAZER ESCOLHAS INTELIGENTES COM DINHEIRO.
            </p>
          </div>
        </div>
      </main>

      <div className="w-full h-screen bg-blue-500 flex justify-center items-center">

        <div className="w-full max-w-[1410px] flex justify-between px-4">

          
            <div className="flex-1 h-[288px] bg-baseWhite rounded-3xl mx-20">

            </div>

          <div className="flex-1 h-[288px] bg-baseWhite rounded-3xl mx-20">

          </div>
          <div className="flex-1 h-[288px] bg-baseWhite rounded-3xl mx-20">

          </div>
        </div>
      </div>
    </>
  );
}
