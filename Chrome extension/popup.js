// Find the current tab url and populate the popup html
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;

    // The key is the url of the page.s
    var vidsUrls = localStorage.getItem(url);
    console.log(vidsUrls);
    console.log(typeof vidsUrls);

    if (vidsUrls && vidsUrls !== '[]') document.getElementById('vidUrls').innerHTML = vidsUrls;
});
