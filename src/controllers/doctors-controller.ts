import { prisma } from "@/database/prisma";
import { Request, Response } from "express";


class DoctorsController {
    async index(request: Request, response: Response){
        const listDoctors = await prisma.medico.findMany()

        return response.json(listDoctors)
    }
}

export { DoctorsController}