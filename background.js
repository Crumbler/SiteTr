


chrome.runtime.onInstalled.addListener(onInstalled);
//chrome.tabs.onUpdated.addListener(onTabUpdated);


const mainPattern = new URLPattern(
    'http{s}?://*/*'
);


function onInstalled() {
    
}


function onTabUpdated(tabId, changeInfo, tab) {
    if (changeInfo.status !== 'complete' ||
        !mainPattern.test(tab.url)) {
        return;
    }

    chrome.scripting.executeScript({
        target: { tabId },
        files: [ '/translate.js' ]
    });
}