import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero
        title="OUR GUIDES. YOUR STORIES."
        subtitle=""
        backgroundImage="/images/background1.webp"
      />

      <main className="w-full text-black">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="relative h-[320px] md:h-[520px]">
            <Image
              src="/images/background2.webp"
              alt="background2"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="relative h-[320px] md:h-[520px]">
            <Image
              src="/images/background3.webp"
              alt="background3"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </main>
    </div>
  );
}