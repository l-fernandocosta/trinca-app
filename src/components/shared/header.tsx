"use client";

import { Button } from "@/components/ui/button";
import { getOS } from "@/packages/helpers/get-operational-system.helper";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";
import { NavigationCommand } from "./navigation-command";
import { ShortcutCommand } from "./shortcut-command";

export const Header = () => {
  const { user } = useUser();
  const [os, setOS] = React.useState<string>("Mac OS");

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const os = getOS(navigator.userAgent);
    setOS(() => os || "Mac OS");

    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);


  return (
    <div className='w-full inset-x-0 top-0 sticky h-16 p-2 flex items-center border-b gap-3 justify-between'>
      <div className='flex flex-row gap-3 items-center'>
        <UserButton afterSignOutUrl='/' />
        <span className='text-sm font-semibold'>{user?.firstName}</span>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <ShortcutCommand os={os || "Windows"} shortcutKey='J' />
        <Button
          size={"icon"}
          variant={"outline"}
          aria-label='Menu ações'
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className='w-4 h-4' />
        </Button>
      </div>
      <NavigationCommand open={open} setOpen={setOpen} />
    </div>
  );
};
