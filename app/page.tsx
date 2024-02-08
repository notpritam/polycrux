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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <div className="w-full flex flex-col gap-[20px] p-[24px]">
          {/* Market Mood */}
          <div className="flex flex-col gap-1">
            <span className="text-white text-[26px] font-semibold">
              Market Mood
            </span>
            <p className="text-[14px] text-iconGray">
              Real time global NFT market data. We have included{" "}
              <span className="text-primaryLight">6,114</span>
              collections and{" "}
              <span className="text-primaryLight">46,401,282</span> NFTs in
              total.
            </p>
          </div>

          {/* BaroMeter */}

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-medium text-white">
                Barometer
              </span>
              <Image
                src={"/icons/info.svg"}
                height={20}
                width={20}
                alt="logo"
              />
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-[20%] rounded-[8px] flex flex-col gap-4 p-4 text-iconGray min-h-[150px] bg-secDark">
                sdf
              </div>
              <div className="w-[40%] rounded-[8px] flex flex-col gap-4 p-4 text-iconGray min-h-[150px] bg-secDark">
                sad
              </div>
              <div className="w-[40%] rounded-[8px] flex flex-col gap-4 p-4 text-iconGray min-h-[150px] bg-secDark">
                asd
              </div>
            </div>
          </div>

          {/* Analytics */}
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex justify-end bg-transparent gap-[6px]">
              <TabsTrigger
                className="text-[14px] text-iconGray"
                value="all-time"
              >
                All Time
              </TabsTrigger>
              <TabsTrigger className="text-[14px] text-iconGray" value="90d">
                90d
              </TabsTrigger>
              <TabsTrigger className="text-[14px] text-iconGray" value="30d">
                30d
              </TabsTrigger>{" "}
              <TabsTrigger className="text-[14px] text-iconGray" value="7d">
                7d
              </TabsTrigger>{" "}
              <TabsTrigger className="text-[14px] text-iconGray" value="20hr">
                24hr
              </TabsTrigger>{" "}
              <TabsTrigger className="text-[14px] text-iconGray" value="30m">
                30m
              </TabsTrigger>
              <TabsTrigger className="text-[14px] text-iconGray" value="15m">
                15m
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
