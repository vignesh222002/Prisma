import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// async function updatePulished(id: number, status: boolean) {
//     const post = await prisma.post.update({
//         where: { id },
//         data: { published: status }
//     })
// }

// updatePulished(2, true)
//     .then(() => {
//         prisma.$disconnect()
//     })
//     .catch((error) => {
//         console.error("Error", error);
//         prisma.$disconnect()
//     })

async function getAllUsers() {
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        }
    });
    return allUsers;
}

getAllUsers()
    .then(async (response) => {
        console.dir(response, { depth: null })
        prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error("Error", error)
        prisma.$disconnect();
    })