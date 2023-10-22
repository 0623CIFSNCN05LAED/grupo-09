module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Categorias",
        {
        categoria: DataTypes.STRING,  
        },
        {
        tableName: "categorias",
        timeStamps: false,    
        }
    );
    return Model;
}