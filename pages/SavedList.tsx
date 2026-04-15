import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/card";

type CardData = {
  id: string;
  title: string;
  continent: string;
  image: string;
};

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState<CardData[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("savedCards") || "[]");
      setSavedItems(stored);
    } catch {
      setSavedItems([]);
    }
  }, []);

  const toggleSave = (card: CardData) => {
    const updated = savedItems.filter((item) => item.id !== card.id);
    setSavedItems(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  return (
    <main className="w-full px-3 py-6 text-black md:px-5 lg:px-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Saved Destinations</h1>

        <Link
          href="/destinations"
          className="font-medium text-blue-600 transition hover:underline"
        >
          Back to Full List
        </Link>
      </div>

      {savedItems.length === 0 ? (
        <p className="text-gray-600">No saved cards yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {savedItems.map((card) => (
            <Card
              key={card.id}
              {...card}
              isSaved={true}
              onToggleSave={toggleSave}
            />
          ))}
        </div>
      )}
    </main>
  );
}