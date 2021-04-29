//const { mainCards, animals, categories } = require("../db"); that was passend in the contex

const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, { animals }) => {
    console.log(args);

    const animalToBeFound = animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animalToBeFound;
  },
  categories: () => categories,
  category: (parent, args, { categories }) => {
    const category = categories.find((animalCategory) => {
      return animalCategory.category === args.category;
    });
    return category;
  },
};

module.exports = Query;
