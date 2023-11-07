module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Usuarios",
        {
        fullName: DataTypes.STRING,
        country: DataTypes.STRING,
        telefono: DataTypes.STRING,
        email: DataTypes.STRING,
        clave: DataTypes.STRING,
        avatar: DataTypes.STRING,
        },
        {
        tableName: "usuarios",
        timestamps: false,    
        }
    ); 
    return Model;
}