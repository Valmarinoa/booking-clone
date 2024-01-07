"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import logo from "../public/booking-logo-white.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { Popover, Transition } from "@headlessui/react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const products = [
    {
      name: "Basic Tee",
      description: "Pre-washed cotton tee with a buttery soft texture",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "Chaingang Tee",
      description: "Pre-washed cotton tee with a buttery soft texture",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "Green Tee",
      description: "Pre-washed cotton tee with a buttery soft texture",
      href: "#",
      icon: HomeIcon,
    },
  ];

  return (
    <header className="bg-[#013B94]" aria-label="Global">
      <nav className=" flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* logo */}
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <Image src={logo} alt="Booking.com -Clone" height={52} />
          </Link>
        </div>

        {/* menu items */}
        <Popover.Group as="nav" className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 bg-white top-full -left-8 w-screen max-w-md mt-3 overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 ">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative group flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-medium text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className=" mt-1 text-[#013B94]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>

        {/* menu icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 justify-center rounded-md p-2.5 text-white inline-flex items-center"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <span className="sr-only">Open Menu Bar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
