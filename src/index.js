import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
  type Query {
     hello: String
     hi: String
  }
  `,
  resolvers:{
    Query: {
     hello: async() => {
      return 'You are the best';
    },
    hi: ()=> {
       return 'hi';
   },
  },
 },
});

server.listen(4001).then(({url})=> {
  console.log(`Server listening on url ${url}`);
});
