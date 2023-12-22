const productService = require("../services/productService");
 
const mainController = {
    home: (req, res) => {
        productService.getAllProducts()
        .then(productos => {
            res.render("index", {productos});
        })
        
    },
}

module.exports = mainController;
