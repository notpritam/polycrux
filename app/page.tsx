import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen bg-mainDark">
      <div className="border-[0px] border-r-[1px] border-strokeB1 w-[71px] py-[12px] px-4">
        <Image src={"/logo.svg"} height={42} width={42} alt="logo" />

        <div className=" pt-[24px] gap-4 pb-[42px] flex flex-col ">
          {Array.from({ length: 11 }).map((item, i) => (
            <>
              <div className="flex h-[44px] items-center justify-center">
                <Image
                  key={i}
                  src={`/nav/${i + 1}.svg`}
                  height={24}
                  width={24}
                  alt="logo"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
