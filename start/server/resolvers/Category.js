//const { mainCards, animals, categories } = require("../db"); that was passend in the contex

const Category = {
  animals: (parent, args, { animals }) => {
    console.log({ parent });
    return animals.filter((animal) => {
      return animal.category === parent.id;
    });
  },
};

module.exports = Category;
