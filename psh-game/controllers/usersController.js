const db = require("../database/models")
const fetch = require('node-fetch');
var CronJob = require('cron').CronJob;
var cron = require('cron').CronJob;
var cron = require('node-cron');


const usersController = {
    index: function (req, res, next) {
        res.send("hola")
    },

    create: function (req, res, next) {


        fetch("https://randomuser.me/api")
            .then(function (response) { return response.json() })
            .then(function (data) {

                var randomNickname = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
                var randomPicture = data.results[0].picture.large


                //var job = new CronJob('*/5 * * * * *', function () {
                  //  job.start();

                    db.Users.create({

                        nickname: randomNickname,
                        image: randomPicture,
                        creation: new Date(),
                        score: Math.floor(Math.random() * 101)
                    })

                        .then(function (usuario) {
                            res.redirect("/game/topTen")
                        })
               // }, null, true, 'America/Los_Angeles');


                /*let cantidadMaxima = 10
                let cantidadUsuarios = db.Users.count()
                if (cantidadMaxima >= cantidadUsuarios) {
                    job.stop()
                }*/
            })

    },
    topTen: function(req, res, next){
        db.Users.findAll({
            order:[ ["score", "desc"]]
        })

        .then(function(usuarios){
            res.render("topTen", {usuarios:usuarios})
        })
    }

}
module.exports = usersController