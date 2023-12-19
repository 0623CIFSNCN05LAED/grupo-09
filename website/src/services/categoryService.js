const { Categorias } = require("../database/models");

module.exports = {
  getAllCategories: () => {
    return Categorias.findAll();
  },
};