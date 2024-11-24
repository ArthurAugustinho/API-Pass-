import { prisma } from "@/database/prisma";

async function seed() {
  // Criando 5 usuários com e-mails únicos
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: "João Silva",
        email: "joao.silva2024@example.com", // e-mail único
        password: "senha123",
      },
    }),
    prisma.user.create({
      data: {
        name: "Maria Souza",
        email: "maria.souza2024@example.com", // e-mail único
        password: "senha123",
      },
    }),
    prisma.user.create({
      data: {
        name: "Carlos Almeida",
        email: "carlos.almeida2024@example.com", // e-mail único
        password: "senha123",
      },
    }),
    prisma.user.create({
      data: {
        name: "Fernanda Costa",
        email: "fernanda.costa2024@example.com", // e-mail único
        password: "senha123",
      },
    }),
    prisma.user.create({
      data: {
        name: "Juliana Oliveira",
        email: "juliana.oliveira2024@example.com", // e-mail único
        password: "senha123",
      },
    }),
  ]);

  // Criando 5 médicos e associando com os usuários criados
  const medicos = await Promise.all([
    prisma.medico.create({
      data: {
        nome: "Dr. João Silva",
        especialidade: "Cardiologia",
        horarioAtendimento: "Segunda a Sexta, 08:00 - 17:00",
        disponibilidade: "Segunda a Sexta, 08:00 - 17:00",
        userId: users[0].id, // Associando ao primeiro usuário
      },
    }),
    prisma.medico.create({
      data: {
        nome: "Dra. Maria Souza",
        especialidade: "Dermatologia",
        horarioAtendimento: "Segunda a Quinta, 09:00 - 16:00",
        disponibilidade: "Segunda a Quinta, 09:00 - 16:00",
        userId: users[1].id, // Associando ao segundo usuário
      },
    }),
    prisma.medico.create({
      data: {
        nome: "Dr. Carlos Almeida",
        especialidade: "Pediatria",
        horarioAtendimento: "Terça a Sexta, 10:00 - 18:00",
        disponibilidade: "Terça a Sexta, 10:00 - 18:00",
        userId: users[2].id, // Associando ao terceiro usuário
      },
    }),
    prisma.medico.create({
      data: {
        nome: "Dra. Fernanda Costa",
        especialidade: "Ginecologia",
        horarioAtendimento: "Segunda a Sexta, 07:30 - 15:30",
        disponibilidade: "Segunda a Sexta, 07:30 - 15:30",
        userId: users[3].id, // Associando ao quarto usuário
      },
    }),
    prisma.medico.create({
      data: {
        nome: "Dr. Juliana Oliveira",
        especialidade: "Neurologia",
        horarioAtendimento: "Segunda a Sexta, 09:00 - 18:00",
        disponibilidade: "Segunda a Sexta, 09:00 - 18:00",
        userId: users[4].id, // Associando ao quinto usuário
      },
    }),
  ]);

  console.log("Database seeded with 5 users and 5 doctors!");
}

seed()
  .then(() => {
    console.log("Database seeded!");
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
