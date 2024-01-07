"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  //   XMarkIcon,
} from "@heroicons/react/16/solid";
import { Dialog, Disclosure } from "@headlessui/react";
import Logo from "./header-components/Logo";
import PopoverMenuItem from "./header-components/PopoverMenuItem";
import Login from "./header-components/Login";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuItems, products, services } from "@/lib/data";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94]" aria-label="Global">
      <nav className="flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        <Logo />
        <PopoverMenuItem />
        <Login />

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 justify-center rounded-md p-2.5 text-white inline-flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open Menu Bar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <MobileHeader
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </Dialog>
    </header>
  );
};

export default Header;
