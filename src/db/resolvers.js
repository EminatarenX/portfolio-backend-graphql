const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        obtenerReviews: async() => {
            let reviews = await prisma.resenia.findMany();
            
            reviews.forEach(review => {
                review.fecha = review.fecha.toISOString()
            })
            
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