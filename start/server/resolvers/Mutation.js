const { v4 } = require("uuid");
const { animal } = require("./Query");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { animals }
  ) => {
    const newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };

    console.log({ newAnimal });
    animals.push(newAnimal);
    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    const index = animals.findIndex((animalIdex) => {
      return animalIdex.id === id;
    });

    animals.splice(index, 1);

    return true;
  },
};

module.exports = Mutation;
