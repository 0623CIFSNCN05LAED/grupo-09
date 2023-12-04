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


    /*Model.associate = (models) => {
        Model.hasMany(models.Productos);
    };*/

    Model.associate = (models) => {
        Model.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'categoria_id',
        });
    };

    return Model;
}