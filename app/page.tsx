"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(5);
  return (
    <main className="flex min-h-screen min-w-screen dark bg-mainDark">
      {/* SideBar */}
      <div className="border-[0px] border-r-[1px] border-strokeB1 w-[71px] py-[12px] flex flex-col items-center">
        <div className="flex items-center justify-center w-full">
          <Image src={"/logo.svg"} height={42} width={42} alt="logo" />
        </div>

        <div className=" pt-[24px] gap-4 pb-[42px] flex flex-col w-full">
          {Array.from({ length: 11 }).map((item, i) => (
            <>
              <div
                onClick={() => setSelected(i)}
                className={cn(
                  "flex h-[44px] w-full items-center justify-center",
                  i == selected
                    ? "border-r-[2px] border-primaryLight bg-black01"
                    : ""
                )}
              >
                <Image
                  key={i}
                  src={`/nav/${i + 1}.svg`}
                  height={24}
                  width={24}
                  alt="logo"
                  className="fill-current text-green-600"
                />
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <span className="text-[12px] text-light h-[44px]">Wallet</span>
          <div className="flex h-[44px] items-center w-full justify-center">
            <Image src={`/nav/wallet.svg`} height={24} width={24} alt="logo" />
          </div>
        </div>
      </div>

      {/* Main Body */}

      <div>
        {/* Header */}
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
