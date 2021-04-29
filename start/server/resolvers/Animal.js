//const { mainCards, animals, categories } = require("../db"); that was passend in the contex

const Animal = {
  category: (parent, args, { categories }) => {
    return categories.find((category) => {
      return category.id === parent.category;
    });
  },
};

module.exports = Animal;
