const { ApolloServer, gql } = require("apollo-server");

const { mainCards, animals, categories } = require("./db");

const typeDefs = gql`
  type MainCard {
    title: String
    image: String
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    #is related with animals relationship
    category: Category
  }
  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    # is related with category relationship
    animals: [Animal]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    #only provide slug
    animal(slug: String!): Animal
    categories: [Category]!
    category(category: String!): Category
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, context) => {
      const animalToBeFound = animals.find((animal) => {
        return animal.slug === args.slug;
      });
      return animalToBeFound;
    },
    categories: () => categories,
    category: (parent, args, context) => {
      const category = categories.find((animalCategory) => {
        console.log(args.category);
        return animalCategory.category === args.category;
      });
      return category;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
