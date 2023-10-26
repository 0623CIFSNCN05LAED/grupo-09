module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Productos",
        {
        sku: DataTypes.STRING,
        nombre: DataTypes.STRING,
        precio: DataTypes.FLOAT,
        descripcion: DataTypes.STRING,
        ancho: DataTypes.FLOAT,
        alto: DataTypes.FLOAT,
        profundidad: DataTypes.FLOAT,
        peso: DataTypes.FLOAT,
        marca_id: DataTypes.INTEGER,
        categoria_id: DataTypes.INTEGER, 
        },
        {
        tableName: "productos",
        timestamps: false,   
        }
    );
    return Model;
}