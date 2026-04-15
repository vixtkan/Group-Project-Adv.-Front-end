import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="flex w-full items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <Link href="/" className="shrink-0">
          <h1 className="text-3xl font-bold tracking-wide text-blue-600">
            Lonely Planet
          </h1>
        </Link>

        <div className="flex items-center gap-5 text-base font-medium text-gray-700 md:gap-8 lg:text-lg">
          <Link href="/" className="transition hover:text-blue-600">
            HOME
          </Link>
          <Link href="/destinations" className="transition hover:text-blue-600">
            DESTINATIONS
          </Link>
          <Link href="/trips" className="transition hover:text-blue-600">
            TRIPS
          </Link>
          <Link href="/SavedList" className="transition hover:text-blue-600">
            COLLECTION
          </Link>
          <Link href="/aboutus" className="transition hover:text-blue-600">
            ABOUT US
          </Link>
        </div>
      </nav>
    </header>
  );
}



// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          
//           <h1 className="text-xl font-bold text-blue-600">
//             Travel App
//           </h1>

//           <div className="space-x-6">
//             <Link href="/" className="text-gray-700 hover:text-blue-600">
//               Home
//             </Link>
//             <Link href="/destinations" className="text-gray-700 hover:text-blue-600">
//               Destinations
//             </Link>
//             <Link href="/trips" className="text-gray-700 hover:text-blue-600">
//               Trips
//             </Link>
//             <Link href="/aboutus" className="text-gray-700 hover:text-blue-600">
//               About
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Page content */}
//       <main className="max-w-5xl mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-4">
//           Welcome to the Travel App
//         </h2>

//         <p className="text-gray-600">
//           Explore destinations and plan your trips easily.
//         </p>
//       </main>

//     </div>
//   );
// }