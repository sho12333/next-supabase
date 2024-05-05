"use client";
import { Button } from "@/components/ui/button";
import { ThemeChangeMenu } from "@/components/ThemeChangeMenu";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  if (pathName === "/login" || pathName === "/register") return null;
  return (
    <div className="fixed flex justify-between px-8 w-screen h-14 bg-slate-200 items-center drop-shadow-2xl border-b border-gray-300 shadow-md">
      <h1 className="font-bold text-xl">Project</h1>
      <div className="flex gap-3">
        <ThemeChangeMenu />
      </div>
    </div>
  );
};
