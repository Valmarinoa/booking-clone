"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import logo from "../public/booking-logo-white.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  BeakerIcon,
  //   XMarkIcon,
} from "@heroicons/react/16/solid";
import { Popover, Transition } from "@headlessui/react";
import { products, services, menuItems } from "../lib/data";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="bg-[#013B94]" aria-label="Global">
      <nav className="flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <Image src={logo} alt="Booking.com -Clone" height={52} />
          </Link>
        </div>

        {/* Stays item with Popover component*/}
        <Popover.Group
          as="nav"
          className="hidden lg:flex lg:flex-1 justify-center lg:gap-x-12"
        >
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
                <div>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative group flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <item.icon
                          className="h-6 w-6 text-[#013B94] group-hover:text-blue-600 bg-transparent"
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
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* Menu items */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.text}
            </a>
          ))}
        </Popover.Group>

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
