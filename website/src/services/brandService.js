const { Marcas } = require("../database/models");

module.exports = {
    getAllBrands: () => {
        return Marcas.findAll();
    },
};  