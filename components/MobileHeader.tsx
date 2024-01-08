import { menuItems, products, services } from "@/app/data/data";
import { cn } from "@/lib/utils";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Logo from "./header-components/Logo";

interface MobileHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileHeaderProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <div className="fixed inset-0 z-10">
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between px-6">
            <div
              className="
"
            >
              <Logo />
            </div>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only"> Close Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 w-full flex flex-col ">
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className=" px-6 flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        Stays
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...services].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-base px-6 py-2 w-full rounded-lg block font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default MobileHeader;
