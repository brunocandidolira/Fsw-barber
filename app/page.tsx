import { SearchIcon } from "lucide-react";
import Header from "./components/Header";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />

      {/* CONTAINER CENTRAL */}
      <main className="container mx-auto max-w-6xl p-6">

        {/* SAUDAÇÃO */}
        <div>
          <h2 className="text-2xl font-bold">Olá, Bruno</h2>
          <p className="text-muted-foreground">Domingo, 15 de agosto</p>
        </div>

        {/* BUSCA */}
        <div className="flex items-center gap-2 mt-5">
          <input
            placeholder="Faça sua busca"
            className="border rounded-md p-2 flex-1"
          />

          <button className="bg-black text-white p-2 rounded-md">
            <SearchIcon size={18} />
          </button>
        </div>

        {/* BANNER */}
        <div className="relative h-[200px] md:h-[300px] w-full mt-8">
          <Image
            src="/assets/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende nos melhores com o FSW Barber"
          />
        </div>
        <h2 className="text-xl font-bold mt-8">Agendamento</h2>

        {/* AGENDAMENTO */}
        <Card className="mt-8">
          <CardContent className="flex items-center justify-between p-6">

            {/* ESQUERDA */}
            <div className="flex flex-col gap-2">
              <Badge>Confirmado</Badge>

              <h3 className="font-semibold text-lg">
                Corte de cabelo
              </h3>

              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                  <AvatarFallback>VB</AvatarFallback>
                </Avatar>

                <p className="text-sm text-muted-foreground">
                  Vintage Barber
                </p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                06 Agosto
              </p>

              <p className="text-xl font-bold">
                09:45
              </p>
            </div>

          </CardContent>
        </Card>

      </main>
    </div>
  );
}