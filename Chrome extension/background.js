chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    sendResponse({
        "message": "Video Urls have been received by background.js",
        "videoUrls": request.videoUrls
    });

    // Save the video urls for the page in local storage.
    // key: the name url of the tab
    // data: the videoUrls of the tab
    localStorage.setItem(sender.tab.url, JSON.stringify(request.videoUrls));

});

