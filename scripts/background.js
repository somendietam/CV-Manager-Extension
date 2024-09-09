chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Mensaje recibido en background:', message);
    if (message.action === 'saveSession') {
        chrome.storage.local.set({ userInfo: message.userInfo }, () => {
            console.log('Información del usuario guardada en chrome.storage');
        });
    }
});
