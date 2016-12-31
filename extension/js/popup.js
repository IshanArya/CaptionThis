var file = document.getElementById("subtitles");

document.addEventListener('click', function(tab) {
  chrome.tabs.executeScript({
    //code: 'document.body.style.backgroundColor="red"'
  });
});

var xhr = new XMLHttpRequest();
xhr.open('GET', "https://subscene.com/subtitles/avengers-age-of-ultron/english/1187611", true);
xhr.responseType = 'document';
xhr.send();
xhr.onload = function(e) {  
    var doc = e.target.responseXML;
    console.log(doc);
}