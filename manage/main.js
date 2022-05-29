

const addWebsiteButton = document.getElementById('add-website-button');

addWebsiteButton.addEventListener('click', onAddWebsiteClick);


function onAddWebsiteClick() {
    chrome.tabs.create({
        url: '/edit/index.html'
    });
}