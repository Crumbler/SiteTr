

const translateButton = document.getElementById('translate'),
    settingsButton = document.getElementById('settings');

translateButton.addEventListener('click', onTranslateClick);
settingsButton.addEventListener('click', onSettingsClick);


async function onTranslateClick() {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => console.log('Translate'),
    });
}

async function onSettingsClick() {
    chrome.tabs.create({
        url: '/settings/index.html'
    });
}