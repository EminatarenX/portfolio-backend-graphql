const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
require('dotenv').config()

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: process.env.PORT || 4000}).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})

