const { animals } = require("../db");

const Category = {
  animals: (parent, args, context) => {
    console.log(parent);
    return animals.filter((animal) => {
      return animal.category === parent.id;
    });
  },
};

module.exports = Category;
