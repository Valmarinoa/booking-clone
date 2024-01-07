import Link from "next/link";
import React from "react";
import Image from "next/image";

import logo from "../../public/booking-logo-white.png";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Booking.com</span>
        <Image src={logo} priority alt="Booking.com -Clone" height={52} />
      </Link>
    </div>
  );
};

export default Logo;
