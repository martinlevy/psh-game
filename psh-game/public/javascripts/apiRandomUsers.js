window.addEventListener("load", function (){
    fetch("https://randomuser.me/api")
    .then(function (response) { return response.json() })
    .then(function (data) {
        console.log(data.results)
        console.log(data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last)
        console.log(data.results[0].picture.large )

        let randomNickname = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
        let randomPicture = data.results[0].picture.large 
        console.log(randomNickname)
        console.log(randomPicture)
    })

})

