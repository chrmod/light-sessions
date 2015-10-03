chrome.runtime.onMessage.addListener(function (urls) {
  chrome.tabs.query({}, function (tabs) {
    //close all but last
    for(var i = 0; i < tabs.length - 1; i++) {
      chrome.tabs.remove(tabs[i].id, function () {});
    }
    //open new
    urls.forEach(function (url) {
      chrome.tabs.create({url});
    });
    //close last
    chrome.tabs.remove(tabs[i].id, function () {});
  });
});
