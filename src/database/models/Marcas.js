module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Marcas",
        {
        marca: DataTypes.STRING,  
        },
        {
        tableName: "marcas",
        timeStamps: false,    
        }
    );
    return Model;
}