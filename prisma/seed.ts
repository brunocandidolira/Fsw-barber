// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Limpa dados na ordem correta
  await prisma.booking.deleteMany()
  await prisma.barbershopService.deleteMany()
  await prisma.barbershop.deleteMany()
  await prisma.user.deleteMany()

  // Cria usuários
  const user1 = await prisma.user.create({
    data: {
      name: "Bruno",
      email: "bruno@example.com",
      image: "https://i.pravatar.cc/150?img=1",
    },
  })

  const user2 = await prisma.user.create({
    data: {
      name: "Caroline",
      email: "caroline@example.com",
      image: "https://i.pravatar.cc/150?img=2",
    },
  })

  // Cria barbearias
  const shop1 = await prisma.barbershop.create({
    data: {
      name: "Vintage Barba & Estilo",
      address: "Rua das Flores, 123",
      phones: ["(47) 99999-0000", "(47) 98888-1111"],
      description: "Barbearia clássica com corte e barba.",
      imageUrl: "https://i.ibb.co/album/barbershop1.jpg",
    },
  })

  const shop2 = await prisma.barbershop.create({
    data: {
      name: "Barbearia do Mr. Roobot",
      address: "Av. Central, 456",
      phones: ["(47) 97777-2222"],
      description: "Cortes modernos e atendimento premium.",
      imageUrl: "https://i.ibb.co/album/barbershop2.jpg",
    },
  })

  // Cria serviços
  const service1 = await prisma.barbershopService.create({
    data: {
      name: "Corte Clássico",
      description: "Corte de cabelo tradicional.",
      imageUrl: "https://i.ibb.co/album/service1.jpg",
      price: 35.00,
      barbershopId: shop1.id,
    },
  })

  const service2 = await prisma.barbershopService.create({
    data: {
      name: "Barba Completa",
      description: "Barba modelada e aparada.",
      imageUrl: "https://i.ibb.co/album/service2.jpg",
      price: 25.00,
      barbershopId: shop1.id,
    },
  })

  // Cria agendamentos
  await prisma.booking.createMany({
    data: [
      {
        userId: user1.id,
        serviceId: service1.id,
        date: new Date("2026-03-15T10:00:00"),
      },
      {
        userId: user2.id,
        serviceId: service2.id,
        date: new Date("2026-03-16T14:00:00"),
      },
    ],
  })

  console.log("✅ Seed concluído!")
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())