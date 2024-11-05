"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarLinks from "@/constants";
import { cn } from "@/lib/utils";

const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="Hamburger"
            width={36}
            height={36}
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/icons/logo.svg" alt="Zoomo" width={32} height={32} />
            <p className="text-[26px] text-white font-extrabold max:hidden">
              ZOOMO
            </p>
          </Link>
          <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh - 72px)]"></div>
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  <SheetClose key={item.label} asChild>
                    <Link
                      href={item.route}
                      className={cn(
                        "flex gap-4 items-center p-4 rounded-lg justify-start",
                        {
                          "bg-blue-1": isActive,
                        }
                      )}
                    >
                      <Image
                        src={item.imgUrl}
                        alt={item.label}
                        width={24}
                        height={24}
                      />
                      <p className="text-lg font-semibold">{item.label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Mobilenav;
