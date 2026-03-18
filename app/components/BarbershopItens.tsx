import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card"; 
import Image from "next/image"; 
import { Button } from "@/components/ui/button";
interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItens = ({ barbershop }: BarbershopItemProps) => {
  return (
  <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
    <CardContent className="p-0 px-1 pt-1">
      {/* Imagem menor e com proporção quadrada */}
      <div className="relative h-[159px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="px-2 pb-3">
        {/* 'truncate' para manter o card alinhado se o nome for longo */}
        <h2 className="font-bold mt-2 truncate text-sm">
          {barbershop.name}
        </h2>
        <p className="text-xs text-gray-400 truncate">
          {barbershop.address}
        </p>
        
        <Button variant="secondary" className="w-full mt-3 text-xs">
          Reservar
        </Button>
      </div>
    </CardContent>
  </Card>
)
}
export default BarbershopItens;