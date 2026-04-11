import Link from "next/link";
import Header from "@/components/header";
import Card from "@/components/card";

const destinations = [
  { id: "theusa", title: "The USA", continent: "NORTH AMERICA", image: "/images/theusa.avif"},
  { id: "australia", title: "Australia", continent: "AUSTRALIA & PACIFIC", image: "/images/australia.avif" },
  { id: "italy", title: "Italy", continent: "EUROPE", image: "/images/italy.avif"  },
  { id: "spain", title: "Spain", continent: "EUROPE", image: "/images/spain.avif"  },
  { id: "india", title: "India", continent: "ASIA", image: "/images/india.avif"  },
];




export default function Destinations() {
  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Navigation */}
      {/* < Header/> */}
        <main className="max-w-5xl mx-auto p-6 text-black">
      <h2 class="text-xl font-semibold mt-4">Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {destinations.map((card, index) => (
            <Link href={`/destinationpages/${card.id}`}>
          <Card
            key={index}
            
            name={card.title}
            continent={card.continent}
            image={card.image}
            
            
          />
          </Link>
        ))}
      </div>

      </main>
    </div>
  );
}