module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Stocks",
        {
        stock: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,  
        },
        {
        tableName: "stocks",
        timeStamps: false,    
        }
    );
    return Model;
}