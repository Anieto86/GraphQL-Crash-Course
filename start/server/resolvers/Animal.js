const { categories } = require("../db");

const Animal = {
  category: (parent, args, context) => {
    return categories.find((category) => {
      return category.id === parent.category;
    });
  },
};

module.exports = Animal;
