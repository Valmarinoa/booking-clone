"use client";

import React, { useState } from "react";
import {
  Bars3Icon,
  //   XMarkIcon,
} from "@heroicons/react/16/solid";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { products, services, menuItems } from "../lib/data";
import Login from "./header-components/Login";
import PopoverMenuItem from "./header-components/PopoverMenuItem";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94]" aria-label="Global">
      <nav className="flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <Login />

        {/* Stays item with Popover component*/}
        <PopoverMenuItem />

        {/* Login */}
        <div className="hidden lg:flex  lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Login <span aria-hidden="true" />
          </a>
        </div>

        {/* Menu icon */}
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
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"></Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
