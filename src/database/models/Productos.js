module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Productos",
        {
        sku: DataTypes.STRING,
        nombre: DataTypes.STRING,
        precio: DataTypes.FLOAT,
        descripcion: DataTypes.STRING,
        marca_id: DataTypes.INTEGER,
        categoria_id: DataTypes.INTEGER,
        especificacion_id: DataTypes.INTEGER,   
        },
        {
        tableName: "productos",
        timeStamps: false,    
        }
    );
    return Model;
}