window.addEventListener("message", function (event) {
  if (event.source !== window || event.data.targetApp !== "LightSessions") {
    return;
  }

  var urls = event.data.urls;

  var button = document.createElement("button");
  button.innerHTML = "replace session";
  button.addEventListener("click", function () {
    chrome.runtime.sendMessage(urls);
  });

  document.body.appendChild(button);
}, false);
