const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        obtenerReviews: async() => {
            const reviews = await prisma.resenia.findMany();
            return reviews
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