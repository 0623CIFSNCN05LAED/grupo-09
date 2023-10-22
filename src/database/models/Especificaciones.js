module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Especificaciones",
        {
        ancho: DataTypes.FLOAT,
        alto: DataTypes.FLOAT,
        profundidad: DataTypes.FLOAT,
        peso: DataTypes.FLOAT,   
        },
        {
        tableName: "especificaciones",
        timeStamps: false,    
        }
    );
    return Model;
}