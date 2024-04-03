import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: 'a3cc9364-9be9-4302-9de9-3f80dff8316f',    
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
