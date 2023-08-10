const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        obtenerReviews: () => {
            return prisma.resenia.findMany();
        }
    },
    Mutation: {
        crearReview: async (_, { input }) => {
            const { nombre, comentario, calificacion } = input;
            try {
                
                const review = await prisma.resenia.create({
                    data: {
                        nombre,
                        comentario,
                        calificacion
                    }
                })
    
                return review;
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = resolvers;