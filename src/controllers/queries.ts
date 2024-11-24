import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { z } from "zod";
import { DateTime } from 'luxon';

class QueriesController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      pacienteId: z.string().uuid(),
      medicoId: z.string().uuid(),
      data: z.string().refine(value => {
        // Usando Luxon para validar e ajustar a data para o horário de Brasília (America/Sao_Paulo)
        const dateTime = DateTime.fromISO(value, { zone: 'America/Sao_Paulo' });
        return dateTime.isValid;  // Se a data for válida no fuso horário de Brasília
      }, {
        message: "Data inválida ou formato errado. A data precisa ser no formato ISO-8601 com o horário de Brasília."
      }),
    });

    // Parse do body usando o schema de validação
    const { pacienteId, medicoId, data } = bodySchema.parse(request.body);

    // Verificando se o paciente existe
    const pacienteExist = await prisma.paciente.findFirst({
      where: {
        id: pacienteId
      }
    });

    if (!pacienteExist) {
      throw new AppError("Patient does not exist");
    }

    // Verificando se o médico existe
    const medicoExist = await prisma.medico.findFirst({
      where: {
        id: medicoId
      }
    });

    if (!medicoExist) {
      throw new AppError("Doctor does not exist");
    }

    // Convertendo a data para o fuso horário de Brasília e para o formato ISO-8601
    const dateTime = DateTime.fromISO(data, { zone: 'America/Sao_Paulo' });

    // Verificando se a data foi convertida corretamente
    if (!dateTime.isValid) {
      throw new AppError("Data inválida ou formato errado. A data precisa ser no formato ISO-8601 com o horário de Brasília.");
    }

    // Criando o agendamento no banco de dados
    const querie = await prisma.agendamento.create({
      data: {
        pacienteId,
        medicoId,
        data: dateTime.toISO(), // Usando o formato ISO-8601 para armazenar no banco
        status: 'agendado' // Status fixo para agendamento
      }
    });

    return response.status(201).json(querie);
  }

  // lista apenas as consultas que aquele usuario marcou 
  async index(request: Request, response: Response){
    const Myqueries = await prisma.paciente.findUnique({
        where: {
          userId: request.user?.id,  // Filtra o paciente pelo userId, que está na tabela Paciente
        },
        include: {
          agendamentos: {  // Inclui os agendamentos relacionados ao paciente
            select: {
              id: true,
              data: true,
              status: true,
              medico: {
                select: {
                  nome: true,
                  especialidade: true,
                }
              }
            }
          }
        },
      });
      
      
      

    return response.json(Myqueries)
  }
}

export { QueriesController };
