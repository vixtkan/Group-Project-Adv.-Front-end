type CardProps = {
  name: string;
  continent: string;
  image: string;
};

export default function Card({ name, continent, image }: CardProps) {
  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-md p-4 m-2 w-64">
      <img  
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      >
      
      </img>
      <div className="p-4">
      <p className="text-gray-600">{continent}</p>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">Discover</p>
      </div>
    </div>
  );
}