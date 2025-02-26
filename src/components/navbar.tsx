"use client";

import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./modetoggle";

export default function Navbar() {
  const [click, setClick] = useState<boolean>(false);
  const sidebar = () => {};

  return (
    <nav className="p-5 bg-zinc-950 shadow-xl text-white ">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <h1 className="font-bold text-3xl font-sans">
          Hello <span className="text-purple-500 underline">Kazor!</span>
        </h1>

        <div className="flex gap-2 items-center">
          <ModeToggle />
          <Menubar className="bg-zinc-950 border-0 ">
            <MenubarMenu>
              <MenubarTrigger>
                <TiThMenu className="size-6" />
              </MenubarTrigger>
              <MenubarContent className="bg-zinc-950 text-white border-0">
                <MenubarItem>Home</MenubarItem>
                <MenubarItem>About</MenubarItem>
                <MenubarItem>Project</MenubarItem>
                <MenubarItem>Contact</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
}
