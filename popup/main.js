

const translateButton = document.getElementById('translate'),
    manageButton = document.getElementById('manage');

translateButton.addEventListener('click', onTranslateClick);
manageButton.addEventListener('click', onManageClick);


async function onTranslateClick() {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    if (tab.url.startsWith('chrome')) {
        alert('Can\'t use extensions on Chrome URLs.');
        return;
    }

    window.close();

    await chrome.storage.local.set({
        currentUrl: tab.url
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['/translate.js']
    });
}


async function onManageClick() {
    chrome.tabs.create({
        url: '/manage/index.html'
    });
}