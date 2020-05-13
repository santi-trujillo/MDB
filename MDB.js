
function getInfo() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=lp", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "6df82a2995msh2cf8f3385257baep18e1f1jsne916add9e9a2"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(function(response) {
        console.log({ response });
        var ul = document.querySelector('.ulItem')

        function dataOfCell (info, clase) {
            var span = document.createElement('span')
            span.innerText = info
            span.setAttribute('class', clase)
            console.log(clase)
            return span
        }

        var dataList = response.data

        for (var itemList of dataList) {

            var li = document.createElement('li')
            var cover = document.createElement('img')
            var title = dataOfCell(itemList.album.title, 'title')
            var picture = document.createElement('img')
            var name = dataOfCell(itemList.artist.name, 'name')

            cover.setAttribute('src', itemList.album.cover)
            picture.setAttribute('src', itemList.artist.picture_small)

            var allData = [title, cover, name, picture]

            li.append(...allData)

            ul.append(li)
        }
     })
    .catch(err => {
        console.log(err);
    });
}