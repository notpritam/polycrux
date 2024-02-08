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
import Link from "next/link";
import Footer from "@/components/Footer";

interface Day7Data {
  name: string;
  value: string;
  gainValue: string;
}

export default function Home() {
  const [selected, setSelected] = useState(5);

  const data7Day = [
    {
      name: "Holders",
      value: "4,794,450",
      gainValue: "-0.025024358",
    },
    {
      name: "Traders Ratio",
      value: "0.0025",
      gainValue: "-0.7075426",
    },
    {
      name: "Whales",
      value: "482",
      gainValue: "-0.008230452",
    },
    {
      name: "Market Cap",
      value: "$ 13448188000",
      gainValue: "0.0013140348",
    },
    {
      name: "Traders Buyers",
      value: "9613",
      gainValue: "-0.015061475",
    },
    {
      name: "Sharks",
      value: "11361",
      gainValue: "-0.11882417",
    },
    {
      name: "Market State",
      value: "50.00",
      gainValue: "",
    },
    {
      name: "Traders Sellers",
      value: "10037",
      gainValue: "-0.13734423",
    },
    {
      name: "Sales (24H)",
      value: "31298",
      gainValue: "-0.086163096",
    },
    {
      name: "Transactions",
      value: "570364",
      gainValue: "-0.021507941",
    },
    {
      name: "Washtrade Level",
      value: "87.38",
      gainValue: "",
    },
    {
      name: "Trade Activity",
      value: "24",
      gainValue: "",
    },
    {
      name: "Transfers",
      value: "5230738",
      gainValue: "1.6858484",
    },
    {
      name: "Washtrade Assets",
      value: "7806",
      gainValue: "-0.09527121",
    },
    {
      name: "Washtrade Volume",
      value: "$ 877945.06",
      gainValue: "-0.42805672",
    },
    {
      name: "Traders",
      value: "17825",
      gainValue: "-0.07852564",
    },
    {
      name: "Volume",
      value: "$ 12528734",
      gainValue: "-0.31774646",
    },
    {
      name: "Washtrade Wallets",
      value: "4477",
      gainValue: "-0.17625554",
    },
    {
      name: "Washtrade Suspect Sales",
      value: "11361",
      gainValue: "-0.11882417",
    },
    {
      name: "Washtrade Suspect Sales Ratio",
      value: "0.00041829038",
      gainValue: "0.00041821675",
    },
    {
      name: "Whales Transactions",
      value: "0.00041829038",
      gainValue: "0.00041821675",
    },
    {
      name: "NFT market fear and greed index",
      value: "43.835407",
      gainValue: "-0.42805672",
    },
  ];
  function shuffle(array: Day7Data[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <main className="flex min-h-screen min-w-screen dark bg-mainDark">
      {/* SideBar */}
      <div className="border-[0px] sticky top-0 left-0 h-screen bottom-0 border-r-[1px] border-strokeB1 w-[71px] py-[12px] flex flex-col items-center">
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
        <div className="h-[61px] z-[10] bg-mainDark flex sticky top-0 w-full justify-between border-b-[1px] border-borderGray px-[24px] py-[10px]">
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

        <div className="w-full flex flex-col gap-[20px] p-[24px] pb-[48px]">
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
          <Tabs defaultValue="all-time" className="w-full">
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
            {["all-time", "90d", "30d", "7d", "20hr", "30m", "15m"].map(
              (item, i) => (
                <>
                  <TabsContent
                    className="w-full pt-[20px] flex gap-[20px] flex-wrap"
                    value={item}
                  >
                    {shuffle(data7Day).map((item, i) => (
                      <>
                        <div
                          className={cn(
                            "bg-secDark rounded-[12px] min-w-[15%] w-fit flex-grow py-[10px] px-[20px] text-white flex flex-col gap-4"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-4 font-semibold">
                              {item.name}
                            </span>
                            <Image
                              src={"/icons/question.svg"}
                              height={30}
                              width={30}
                              alt="logo"
                            />
                          </div>
                          <span className="font-semibold text-[22px]">
                            {item.value}
                          </span>
                          <div className="flex items-center gap-[6px]">
                            <span
                              className={cn(
                                "text-[14px]",
                                parseFloat(item.gainValue) > 0
                                  ? "text-customGreen"
                                  : "text-customRed"
                              )}
                            >
                              {item.gainValue}
                            </span>
                            <Image
                              src={
                                parseFloat(item.gainValue) > 0
                                  ? "/icons/up.svg"
                                  : "/icons/down.svg"
                              }
                              height={30}
                              width={30}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </>
                    ))}
                  </TabsContent>
                </>
              )
            )}
          </Tabs>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
