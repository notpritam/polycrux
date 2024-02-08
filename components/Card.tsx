import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const CustomCard = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-secDark p-[24px] border-black01 border-[1px] rounded-[12px] w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CustomCard;
