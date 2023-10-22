module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Carritos",
        {
        cantidad: DataTypes.INTEGER,
        usuario_id: DataTypes.INTEGER,
        producto_id: DataTypes.INTEGER,   
        },
        {
        tableName: "carritos",
        timeStamps: false,    
        }
    );
    return Model;
}