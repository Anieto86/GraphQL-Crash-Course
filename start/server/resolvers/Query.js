//const { mainCards, animals, categories } = require("../db"); //that was passend in the contex

const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    const animalToBeFound = animals.find((animal) => {
      return animal.slug === args.slug.toLowerCase();
    });
    return animalToBeFound;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    console.log({ parent }, "1");
    console.log({ args });
    const category = categories.find((animalCategory) => {
      return animalCategory.category === args.category;
    });
    return category;
  },
};

module.exports = Query;
