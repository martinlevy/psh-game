const db = require('../../database/models');
const fetch = require('node-fetch');
fetch("https://randomuser.me/api")
.then(function (response) { return response.json() })
.then(function (data) {
    let randomNickname = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
    let randomPicture = data.results[0].picture.large
})
const apiController = {
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
                    .then(function (users) {
                        let response = {
                            meta: {
                                status: 200,
                                url: "/api/game/create"
                            },
                            data: users
                        }
                        res.json(response)
                    })
                // }, null, true, 'America/Los_Angeles');


                /*let cantidadMaxima = 10
                let cantidadUsuarios = db.Users.count()
                if (cantidadMaxima >= cantidadUsuarios) {
                    job.stop()
                }*/
            })

    },
    topTen: function (req, res, next) {
        db.Users.findAll({
            order: [["score", "desc"]]
        })

            .then(function (users) {
                let response = {
                    meta: {
                        status: 200,
                        url: "/api/game/topTen"
                    },
                    data: users
                }
                res.json(response)
            })
    }
}

module.exports = apiController