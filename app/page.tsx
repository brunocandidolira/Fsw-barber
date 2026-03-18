import { SearchIcon } from "lucide-react";
import Header from "./components/Header";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { prisma } from "@/lib/prisma";
import BarbershopItens from "./components/BarbershopItens";

export default async function Home() {
  const barbershops = await prisma.barbershop.findMany({});

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-7xl p-6">
        {/* Saudação */}
        <div>
          <h2 className="text-2xl font-bold">Olá, Bruno</h2>
          <p className="text-muted-foreground">Domingo, 15 de agosto</p>
        </div>

        {/* Busca */}
        <div className="flex items-center gap-2 mt-5">
          <input
            placeholder="Faça sua busca"
            className="border rounded-md p-2 flex-1 bg-card"
          />
          <button className="bg-primary text-white p-2 rounded-md">
            <SearchIcon size={18} />
          </button>
        </div>

        {/* Banner */}
        <div className="relative h-[150px] md:h-[250px] w-full mt-8">
          <Image
            src="/assets/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende nos melhores com o FSW Barber"
          />
        </div>

        {/* Seção de Agendamento */}
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 mt-8">Agendamentos</h2>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div className="flex flex-col gap-2 py-0.5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold text-lg">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                  <AvatarFallback>VB</AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground">Vintage Barber</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-5">
              <p className="text-sm text-muted-foreground capitalize">Agosto</p>
              <p className="text-2xl font-bold">09</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>

        {/* Seção de Recomendados - */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mb-3 mt-6">Recomendados</h2>
        
        {/* Grid ajustado: 2 colunas no mobile, 4 no tablet, 5 ou 6 no PC grande */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItens key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </main>
    </div>
  );
}