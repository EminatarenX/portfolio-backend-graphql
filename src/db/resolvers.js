const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const crearToken = (usuario, secret, expiresIn) => {

    const { id, nombre } = usuario

    return jwt.sign({ id, nombre }, secret, { expiresIn })
}

const resolvers = {
    Query: {
        obtenerReviews: async() => {
            try {
                
                let reviews = await prisma.resenia.findMany();
                
                reviews.forEach(review => {
                    review.fecha = review.fecha.toISOString()
                })
                
                return reviews
            } catch (error) {
                console.log(error)
            }finally{
                await prisma.$disconnect()
            }
        },
        obtenerUsuario: async (_, { token }) => {
            const usuarioId = await jwt.verify(token, process.env.SECRET)

            return usuarioId
        },
        obtenerMensajes: async (_,{}, ctx ) => {
            
            try {
                
                let mensajes = await prisma.mensaje.findMany();
                
                mensajes.forEach(mensaje => {
                    mensaje.fecha = mensaje.fecha.toISOString()
                })
                
                return mensajes
            } catch (error) {
                console.log(error)
            }finally{
                await prisma.$disconnect()
            }
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
            }finally{
                await prisma.$disconnect()
            }
        },
        crearUsuario: async (_, { input }) => {
            const {nombre, password} = input

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            try {
                
                const usuario = await prisma.usuario.create({
                    data: {
                        nombre,
                        password: hashedPassword
                    }
                })

                return usuario;
               
            } catch (error) {
                console.log(error)
            }
        },
        autenticarUsuario: async (_, { input }) => {
            const {nombre, password} = input
            
            const existeUsuario = await prisma.usuario.findFirst({
                where: {
                    nombre
                }
            })

            if(!existeUsuario) {
                throw new Error('El usuario no existe')
            }

            const passwordCorrecto = await bcrypt.compare(password, existeUsuario.password)

            if(!passwordCorrecto) {
                throw new Error('Password incorrecto')
            }

            return {
                token: crearToken(existeUsuario, process.env.SECRET, '1h')
            }
        },
        crearMensaje: async (_, { input }) => {
            const { nombre, correo, mensaje, telefono } = input;
   
            try {
                
                let nuevoMensaje = await prisma.mensaje.create({
                    data: {
                        nombre,
                        correo,
                        mensaje,
                        telefono
                    }
                })
                nuevoMensaje.fecha = nuevoMensaje.fecha.toISOString()
                return nuevoMensaje
            } catch (error) {
                console.log(error)
                
            }
        },

    }
}

module.exports = resolvers;