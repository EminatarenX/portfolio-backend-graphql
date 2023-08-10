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
        input UsuarioInput {
            nombre: String!
            password: String!
        }
        
        input AutenticarInput {
            nombre: String!
            password: String!
        }
        
        type Query {
            obtenerReviews: [Review]

            #auth
            obtenerUsuario(token: String!): Usuario
        }
        type Mutation {
            crearReview(input: ReviewInput!): Review

        # Usuario
        crearUsuario(input: UsuarioInput!): Usuario
        autenticarUsuario(input: AutenticarInput): Token

    }


`

module.exports = typeDefs;