import { SearchIcon } from "lucide-react";
import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Bruno</h2>
        <p>Domingo, 15 de agosto</p>

        <div className="flex items-center gap-1 mt-3">
          <input
            placeholder="Faça sua busca"
            className="border rounded-md p-2 flex-1"
          />

          <button className="bg-black text-white p-2 rounded-md">
            <SearchIcon size={18} />
          </button>
        </div>

        <div className="relative h-[300px] w-full mt-6">
          <Image
            src="/assets/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende nos melhores com o FSW Barber"
          />
        </div>
      </div>
    </div>
  );
}