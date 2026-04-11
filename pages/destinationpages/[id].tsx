import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/components/header";
import Card from "@/components/card";

const destinations = [
  { id: "theusa", title: "The USA", overview: "The great American experience is about so many things: bluegrass and beaches, snow-covered peaks and redwood forests, restaurant-loving cities and big open skies, and that's just for starters.", image: "/images/theusa.avif"},
  { id: "australia", title: "Australia", overview: "Australia is the unexpected: a place where the world's oldest cultures share vast ochre plains, stylish laneways and unimaginably blue waters with successive waves of new arrivals from across the globe.", image: "/images/australia.avif"},
  { id: "italy", title: "Italy", overview: "Home to many of the world's greatest works of art, architecture and gastronomy, Italy elates, inspires and moves like no other.", image: "/images/italy.avif" },
  { id: "spain", title: "Spain", overview: "Passionate, sophisticated Spain is full of wild beauty, deep history and some of the best food you'll ever eat. Life is a fiesta, and everyone's invited.", image: "/images/spain.avif" },
  { id: "india", title: "India", overview: "With its sumptuous mix of traditions, spiritual beliefs, festivals, architecture and landscapes, India will set your memories ablaze long after you've left its shores.", image: "/images/india.avif" },
];

export default function DestinationPage() {
  const router = useRouter();
  const { id } = router.query;

  const destination = destinations.find((p) => p.id === id);

  if (!destination) return <p>Destination not found</p>;

  return (
    <div>
    
      {/* < Header/> */}
      <img src={destination.image} alt={destination.title}></img>
      <h1>{destination.title}</h1>
      <p>{destination.overview}</p>

      <Link href="/destinations">Back to Destinations</Link>
    </div>
  );
}