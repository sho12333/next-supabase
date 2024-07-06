"use client";
import { DashboardIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import TooltipIcon from "../TooltipIcon";
import { NotebookIcon, SettingsIcon } from "lucide-react";

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white min-w-24 min-h-screen p-4">
      <nav className="space-y-4">
        <Link href="/dashboard">
          <div className="block py-2 px-4 rounded hover:bg-gray-700">
            <TooltipIcon text="Dashboard">
              <DashboardIcon />
            </TooltipIcon>
          </div>
        </Link>
        <Link href="/notes">
          <div className="block py-2 px-4 rounded hover:bg-gray-700">
            <TooltipIcon text="Notes">
              <NotebookIcon />
            </TooltipIcon>
          </div>
        </Link>
        <Link href="/settings">
          <div className="block py-2 px-4 rounded hover:bg-gray-700">
            <TooltipIcon text="Settings">
              <SettingsIcon />
            </TooltipIcon>
          </div>
        </Link>
      </nav>
    </div>
  );
};
