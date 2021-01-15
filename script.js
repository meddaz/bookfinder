

function search() {

    var searchTerms = document.getElementById('searchInput').value;
    var url = "https://www.googleapis.com/books/v1/volumes?maxResults=25&q=" + searchTerms;
    $.getJSON(url, function (data) {

        console.log(data);
        var items = data.items;
        for (var i = 0; i < items.length; i++) {
          

             display.innerHTML +=  `<div class = "result"><img src="${items[i].volumeInfo.imageLinks.smallThumbnail}">
                
               <u> ${items[i].volumeInfo.title} </u><br> ${items[i].volumeInfo.authors} <br> ${items[i].searchInfo.textSnippet}<br> <a href="${items[i].volumeInfo.infoLink}">Link to buy</a></div><br><br><br>`

        }
    });
display.innerHTML="";

}
