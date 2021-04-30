const { gql } = require("apollo-server");

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
    #look the resolvers
    mainCards: [MainCard]
    animals: [Animal!]!
    #only provide slug
    animal(slug: String!): Animal
    categories: [Category]!
    category(category: String!): Category
  }

  type Mutation {
    #passing all the args for change : Animal
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      onSale: Boolean
      category: String!
    ): Animal
    removeAnimal(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
