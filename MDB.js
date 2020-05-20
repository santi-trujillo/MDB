document.addEventListener("submit",search)
function search(event){
    event.preventDefault()
    console.log("name", event)
    var inputValue = document.querySelector('input').value
    //debugger
    getInfo(inputValue)
}

function getInfo(name) {
    var searchUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + name
    if (!name) {
        return
    }
    var ul = document.querySelector('.ulItem')
    var li = document.createElement('li')
    li.innerText = 'Cargando...'
    ul.append(li)

    fetch(searchUrl, {
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
        ul.innerHTML = ''

        function dataOfCell (info, clase) {
            var span = document.createElement('span')
            span.innerText = info
            span.setAttribute('class', clase)
            return span
        }

        var dataList = response.data

        if (!dataList) {
            return
        }

        for (var itemList of dataList) {

            var li = document.createElement('li')
            var cover = document.createElement('img')
            var dataContainer = document.createElement('div')
            var title = dataOfCell(itemList.album.title, 'title')
            var picture = document.createElement('img')
            var name = dataOfCell(itemList.artist.name, 'name')

            cover.setAttribute('src', itemList.album.cover)
            cover.setAttribute('class', 'cover')
            picture.setAttribute('src', itemList.artist.picture_small)
            picture.setAttribute('class', 'picture')

            dataContainer.append(title, picture, name)
            li.append(cover)

            li.append(dataContainer)

            ul.append(li)
        }
     })
    .catch(err => {
        console.log(err);
    });
}