const { gql } = require('apollo-server');

const typeDefs = gql`
        type Review {
            id: ID
            fecha: String
            nombre: String
            comentario: String
            calificacion: Int
        }
        
        type Usuario {
            id: ID
            nombre: String
            password: String
        }
        
        
        type Token {
            token: String
        }
        
        
        input ReviewInput {
            nombre: String!
            comentario: String!
            calificacion: Int!
        }
        
        type Mensaje {
            id: ID
            fecha: String
            nombre: String
            correo: String
            mensaje: String
            telefono: String
        }
        input UsuarioInput {
            nombre: String!
            password: String!
        }
        
        input AutenticarInput {
            nombre: String!
            password: String!
        }

        input MensajeInput {
            nombre: String!
            correo: String!
            mensaje: String!
            telefono: String!
        }
        
        type Query {
            # Reviews
            obtenerReviews: [Review]

            # Auth
            obtenerUsuario(token: String!): Usuario

            # Mensajes
            obtenerMensajes: [Mensaje]
        }
        type Mutation {
            crearReview(input: ReviewInput!): Review

            # Usuario
            crearUsuario(input: UsuarioInput!): Usuario
            autenticarUsuario(input: AutenticarInput): Token

            # Mensajes
            crearMensaje(input: MensajeInput!): Mensaje

    }


`

module.exports = typeDefs;