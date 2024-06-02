"use client";
import { Button } from "@/components/ui/button";
import { ThemeChangeMenu } from "@/components/ThemeChangeMenu";
import { usePathname } from "next/navigation";
import { UserChangeMenu } from "../UserChangeMenu";

export const Header = () => {
  const pathName = usePathname();
  // if (pathName === "/login" || pathName === "/register") return null;
  return (
    <div className="fixed flex p-6 h-14 w-5/6 bg-slate-50 text-slate-950 dark:text-slate-200 dark:bg-slate-950 items-center border-b border-slate-300 dark:border-0">
      <h1 className="font-bold text-xl">Project</h1>
      <div className="ml-auto">
        <UserChangeMenu />
        <ThemeChangeMenu />
      </div>
    </div>
  );
};
