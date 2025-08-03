import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md p-4 flex items-center">
      <div className="flex items-center gap-3">
        <Image
          src="/window.svg"
          alt="Alpha-Graph Logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold text-gray-800">Alpha-Graph</h1>
      </div>
    </header>
  );
}
