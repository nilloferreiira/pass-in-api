import { z } from "zod";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { BadRequest } from "./_errors/bad-request";

export async function checkIn(app: FastifyInstance) {
    app
     .withTypeProvider<ZodTypeProvider>()
     .get('/attendees/:attendeeId/check-in', {
        schema: {
            summary: 'Check-in an attendee for an event',
            tags: ['check-ins'],
            params: z.object({
                attendeeId: z.coerce.number().int(),
            }),
            response: {
                201: z.null(),
            }
        }
     }, async (request, reply) => {
        const { attendeeId } = request.params

        const attendeeCheckIN = await prisma.checkIn.findUnique({
            where: {
                attendeeId,
            }
        })
        
        if(attendeeCheckIN !== null) {
            throw new BadRequest('Attendee already checked in!')
        }

        await prisma.checkIn.create({
            data: {
                attendeeId
            }
        })

        return reply.status(201).send()
     })
}