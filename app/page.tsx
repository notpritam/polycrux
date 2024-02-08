"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

//shadcn

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

      <div className="w-full flex-1">
        {/* Header */}
        <div className="h-[61px] flex sticky top-0 w-full justify-between border-b-[1px] border-borderGray px-[24px] py-[10px]">
          {/* First Section with DropDown */}
          <div className="flex items-center gap-[24px]">
            <DropdownMenu>
              <DropdownMenuTrigger className="h-[42px] px-[14px] py-[10px] flex gap-2 text-lightTextColor items-center bg-secDark rounded-[6px]">
                <div className="flex items-center gap-[14px]">
                  <Image
                    src={"/header/eth.svg"}
                    height={15}
                    width={10}
                    alt="logo"
                  />
                  <span>Etherum</span>
                </div>
                <Image
                  src={"/header/arrow.svg"}
                  height={10}
                  width={14}
                  alt="logo"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="text-[14px] gap-2 text-lightTextColor flex items-center">
              <span className="text-iconGray opacity-60">Dashboards</span>{" "}
              <span> / </span> <span>Market Mood</span>
            </div>
          </div>

          {/* Second Section with Search and Button */}
          <div className="flex gap-[24px]">
            <div className="bg-secDark flex items-center h-[40px] min-w-[384px] rounded-[8px] p-[8px] broder-black01 border-[1px]">
              <div className="h-[24px] w-[24px] flex items-center justify-center">
                <Image
                  src={"/header/search.svg"}
                  height={19}
                  width={19}
                  alt="logo"
                />
              </div>
              <Input
                className="text-[14px] bg-transparent border-0 "
                placeholder="Search by collection, NFT, and user"
              ></Input>

              <Button className="text-lightTextColor bg-mainDark p-0 h-[30px] px-[12px] py-[8px]">
                /
              </Button>
            </div>

            <Button className="bg-transparent">
              <Image
                src={"/header/themeToogle.svg"}
                height={24}
                width={24}
                alt="logo"
              />
            </Button>
            <Button className="bg-transparent">
              <Image
                src={"/header/notification.svg"}
                height={24}
                width={24}
                alt="logo"
              />
            </Button>
            <Button className="bg-primaryLight text-black">
              Connect Wallet
            </Button>

            <div className="relative flex items-center justify-center">
              <div className="h-[14px] absolute z-[2] text-white flex items-center justify-center text-[7px] top-2 right-[-4px] w-[14px] bg-primaryColor rounded-full">
                0
              </div>
              <Image
                src={"/header/cart.svg"}
                height={24}
                width={24}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
