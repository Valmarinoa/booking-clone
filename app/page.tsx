import SearchForm from "@/components/SearchForm";
import { trending_brasil } from "./data/trendingbr";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes, and much more..
        </h3>
      </section>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light"> Low-key gems to discover in Brasil..</p>
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
      </section>
    </main>
  );
}
