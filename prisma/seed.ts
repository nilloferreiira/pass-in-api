import { Prisma } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

async function seed() {
    const eventId = '294aa6d3-00ff-4fee-a418-83356cb7885f'
  
    await prisma.event.create({
        data: {
            id: eventId,    
            title: 'Event to seed',
            slug: 'event-to-seed',
            details: 'Um evento para devs',
            maximumAttendees: 150,
        }
    })

    const attendeesToInsert: any = []
  
    for (let i = 0; i <= 120; i++) {
      attendeesToInsert.push({
        id: 10000 + i,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        eventId,
        createdAt: faker.date.recent({ days: 30, refDate: dayjs().subtract(8, "days").toDate() }),
        checkIn: faker.helpers.arrayElement<Prisma.CheckInUncheckedCreateNestedOneWithoutAttendeeInput | undefined>([
          undefined,
          {
            create: {
              createdAt: faker.date.recent({ days: 7 }),
            }
          }
        ])
      })
    }
  
    await Promise.all(attendeesToInsert.map(data => {
      return prisma.attendee.create({
        data,
      })
    }))
  }



seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
