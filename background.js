chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    windowId: tab.windowId,
    index: tab.index + 1,
    url: "https://example.com",
    active: true
  })
});
