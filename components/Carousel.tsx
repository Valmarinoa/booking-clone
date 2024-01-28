import React from "react";
import Image from "next/image";
import { trending_brasil } from "../app/data/trendingbr";

const Carousel = () => {
  return (
    <>
      <div className="lg:mt-6 mt-0">
        <h3 className="text-xl font-bold">Trending Destinations</h3>
        <p className="font-light"> Low-key gems to discover in Brasil</p>
      </div>
      <div className="flex space-x-4 py-5 overflow-x-scroll">
        {trending_brasil.map((item) => (
          <div key={item.title} className="space-y-1 shrink-0 cursor-pointer">
            <div className="w-80 h-72 object-cover relative">
              <Image
                alt={item.title}
                src={item.img}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="pl-2 pt-2">
              <h3 className="font-bold">{item.title}</h3>
              <p className="font-light text-sm">{item.region}</p>
              <p className="">{item.natureza}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
