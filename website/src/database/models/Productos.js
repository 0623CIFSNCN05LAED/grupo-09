module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Productos",
        {
            sku: DataTypes.STRING,
            nombre: DataTypes.STRING,
            precio: DataTypes.FLOAT,
            descuento: DataTypes.FLOAT,
            descripcion: DataTypes.STRING,
            ancho: DataTypes.FLOAT,
            alto: DataTypes.FLOAT,
            profundidad: DataTypes.FLOAT,
            peso: DataTypes.FLOAT,
            imagen: DataTypes.STRING,
            marca_id: DataTypes.INTEGER,
            categoria_id: DataTypes.INTEGER, 
        },
        {
            tableName: "productos",
            timestamps: false,   
        }
    );

    Model.associate = (models) => {
        Model.belongsTo(models.Marcas, {
            as: 'marcas',
            foreignKey: 'marca_id',
        });
 
        Model.belongsTo(models.Categorias, {
            as: 'categorias',
            foreignKey: 'categoria_id',
        });
    };

    return Model;
}