const { mainCards, animals, categories } = require("../db");

const Query = {
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
      return animalCategory.category === args.category;
    });
    return category;
  },
};

module.exports = Query;
