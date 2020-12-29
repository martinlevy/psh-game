module.exports= (sequelize, dataTypes)=>{
    let alias ="Stats";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        user_id: dataTypes.INTEGER,
    }
    let config = {
        tablename: "stats",
        timestamps: false
    }
    const Stat = sequelize.define(alias, cols, config);
    Stat.associate = function(models){
        Stat.belongsTo(models.Stats,{
            as: "users",
            foreingKey: "user-id"
        })
    }
    return Stat;
}