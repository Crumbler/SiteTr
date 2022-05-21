


function replaceText(element) {
    element.innerText = element.innerText.replace('Domain', 'LOL');
}


async function execute() {
    const { currentUrl } = await chrome.storage.local.get('currentUrl');

    const url = new URL(currentUrl);

    const elements = document.querySelectorAll('h1');

    let count = 0;

    for (let el of elements) {
        replaceText(el);
        ++count;
    }

    console.log('Processed ' + count + ' elements');
}


execute();