window.addEventListener('message', (event) => {
    if (event.source !== window) return;

    if (event.data.type && event.data.type === 'FROM_PAGE') {
        chrome.runtime.sendMessage({
            action: 'saveSession',
            userInfo: event.data.userInfo
        });
    }
});
