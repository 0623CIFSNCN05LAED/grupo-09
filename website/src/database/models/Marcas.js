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

    Model.associate = (models) => {
        Model.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'marca_id',
        });
    };

    return Model;
}