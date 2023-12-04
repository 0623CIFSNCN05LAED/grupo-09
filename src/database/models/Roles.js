module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Roles",
        {
            cantidad: DataTypes.STRING,   
        },
        {
            tableName: "roles",
            timeStamps: false,    
        }
    );

    Model.associate = (models) => {
        Model.hasMany(models.Usuarios, {
            as: 'usuarios',
            foreignKey: 'rol_id',
        });
    };

    return Model;
}