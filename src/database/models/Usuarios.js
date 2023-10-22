module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Usuarios",
        {
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        email: DataTypes.STRING,
        usuario: DataTypes.STRING,  
        clave: DataTypes.STRING,   
        },
        {
        tableName: "usuarios",
        timeStamps: false,    
        }
    );
    return Model;
}