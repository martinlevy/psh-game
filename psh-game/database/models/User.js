module.exports= (sequelize, dataTypes)=>{
    let alias ="Users";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        nickname: dataTypes.STRING,
        image: dataTypes.STRING,
        creation: dataTypes.DATE,
        score: dataTypes.INTEGER
    }
    let config = {
        tablename: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    User.associate= function(models){
        User.hasMany(models.Stats,{
            as: "stats",
            foreingKey: "user-id"
        })
    }
    return User;
}