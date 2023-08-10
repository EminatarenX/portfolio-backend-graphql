const { gql } = require('apollo-server');

const typeDefs = gql`
        type Review {
            id: ID
            fecha: Date
            nombre: String
            comentario: String
            calificacion: Int
        }

        type Query {
            obtenerReviews: [Review]
        }


    input ReviewInput {
        nombre: String!
        comentario: String!
        calificacion: Int!
    }

    type Mutation {
        crearReview(input: ReviewInput!): Review
    }


`

module.exports = typeDefs;