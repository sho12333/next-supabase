import { Button } from "@/components/ui/button";
import { ThemeChangeMenu } from "@/components/ThemeChangeMenu";
import { UserChangeMenu } from "../UserChangeMenu";

export const Header = () => {
  return (
    <div className="flex p-6 h-14 w-full bg-slate-50 text-slate-950 dark:text-slate-200 dark:bg-slate-950 items-center border-b border-slate-300 dark:border-0">
      <h1 className="font-bold text-xl">Project</h1>
      <div className="ml-auto">
        <UserChangeMenu />
        <ThemeChangeMenu />
      </div>
    </div>
  );
};
