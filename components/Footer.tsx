import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Footer = () => {
  return (
    <footer className="h-[37px] sticky justify-between bottom-0 right-0 left-0 z-[10] items-center bg-blackLight w-full flex border-t-[1px] px-[24px] ">
      <div className="flex gap-2">
        <div className="flex gap-[12px]">
          <Image src={"/icons/discord.svg"} height={16} width={16} alt="logo" />{" "}
          <Image src={"/icons/x.svg"} height={16} width={16} alt="logo" />
        </div>
        <div className="h-[16px] w-[4px] border-r-[1px] border-black01 "></div>
        <div className="flex items-center">
          <Image src={"/icons/live.svg"} height={20} width={20} alt="logo" />
          <span className="text-[12px] font-poppins font-medium text-white">
            LIVE DATA
          </span>
        </div>
        <div className="h-[16px] w-[4px] border-r-[1px] border-black01 "></div>
        <div className="flex items-center gap-2">
          <Image src={"/header/eth.svg"} height={12} width={8} alt="logo" />
          <span className="text-[12px] font-poppins font-medium text-iconGray">
            $1,652.42
          </span>
        </div>

        <div className="h-[16px] w-[4px] border-r-[1px] border-black01 "></div>

        <div className="gap-4 flex items-center">
          {["Privacy", "Terms", "Hiring"].map((item, index) => (
            <Link href={"/"} key={index} className="text-[12px] text-iconGray ">
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-end items-center gap-2">
        <div className="flex items-center gap-2">
          <Image src={"/icons/gas.svg"} height={12} width={8} alt="logo" />
          <span className="text-[12px] font-poppins font-medium text-iconGray">
            10 Gwei
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="h-[28px] pr-[3px] pl-[10px] py-[4px] flex gap-2 text-lightTextColor items-center border-black01 boder-[1px] rounded-[6px]">
            <span className="text-[12px]">Etherum</span>

            <Image src={"/header/arrow.svg"} height={8} width={6} alt="logo" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="h-[16px] w-[4px] border-r-[1px] border-black01 "></div>
      </div>
    </footer>
  );
};

export default Footer;
