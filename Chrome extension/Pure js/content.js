var videoArray = document.getElementsByTagName('video');

var modifiedVideoUrls = [];
for (var i = 0; i < videoArray.length; i++) {
    var vidUrl = videoArray[i].src;
    // This will remove all the query parameters
    var modifiedVidUrl = vidUrl.substring(0, vidUrl.indexOf('?'));
    console.log(modifiedVidUrl);
    modifiedVideoUrls.push(modifiedVidUrl);
}

chrome.runtime.sendMessage({ videoUrls: modifiedVideoUrls }, function (response) {
    console.log(response);
});

var div = document.createElement("Input");
div.id = 'searchbox'
document.getElementsByClassName("home-header")[0].appendChild(div);