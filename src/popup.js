var unhostedjsUrl = "https://chrmod.github.io/unhostedjs/";
var inputField = document.getElementById("copy");

function generateApp(urls) {
  urls = JSON.stringify(urls);
  return `
    console.log('Booting LightSessions app');
    var urls = JSON.parse('${urls}');

    //First basic UI
    urls.forEach(function (url) {
      var div = document.createElement("div");
      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.innerHTML = url;
      div.appendChild(a);
      document.body.appendChild(div);
    });

    //Notify LightSession extension if pressent
    window.postMessage({urls, targetApp: "LightSessions"}, "*");
  `;
}

function generateUnhostedAppUrl(encodedApp) {
  return [
    unhostedjsUrl,
    "v1.html",
    "?run=",
    encodedApp
  ].join('');
}

function updateInput(urls) {
  var app = generateApp(urls);
  var encodedApp = btoa(app);
  console.log(app);
  var unhostedAppUrl = generateUnhostedAppUrl(encodedApp);
  inputField.value = unhostedAppUrl;
}

window.addEventListener("load",function () {
  chrome.tabs.query({}, function (tabs) {
    var urls = tabs.map(function (tab) { return tab.url });
    updateInput(urls);
  });
});
