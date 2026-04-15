import Link from "next/link";

type CardData = {
  id: string;
  title: string;
  continent: string;
  image: string;
};

type CardProps = CardData & {
  isSaved: boolean;
  onToggleSave: (card: CardData) => void;
};

export default function Card({
  id,
  title,
  continent,
  image,
  isSaved,
  onToggleSave,
}: CardProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white text-gray-800 shadow-md transition hover:shadow-lg">
      <button
        type="button"
        onClick={() => onToggleSave({ id, title, continent, image })}
        className={`absolute right-3 top-3 z-10 rounded px-3 py-1 text-sm font-medium text-white transition ${
          isSaved
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSaved ? "Remove" : "Save"}
      </button>

      <Link href={`/destinationpages/${id}`} className="block">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </Link>

      <div className="p-4">
        <p className="mb-1 text-sm font-medium tracking-wide text-gray-500">
          {continent}
        </p>

        <h2 className="mb-3 text-lg font-semibold">{title}</h2>

        <Link
          href={`/destinationpages/${id}`}
          className="inline-block rounded border px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-green-700 hover:text-white"
        >
          Discover
        </Link>
      </div>
    </div>
  );
}