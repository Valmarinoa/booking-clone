import Carousel from "@/components/Carousel";
import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 ">
      <section className="">
        <h2 className="font-bold text-5xl text-white">
          Hey Louka! Find your Next Stay
        </h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes, and much more..
        </h3>
      </section>
      <section className="w-full mb-14 lg:-mb-14 mt-0 ">
        {/* className="m-4 mt-0 -mb-14 w-full" */}
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-xl">
        <Carousel />
      </section>
    </main>
  );
}
