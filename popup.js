document.addEventListener('DOMContentLoaded', () => {
    const redirectButton = document.getElementById('redirectButton');
    if (redirectButton) {
        redirectButton.addEventListener('click', () => {
            // URL de tu página de login
            const loginUrl = 'http://localhost:5173'; // URL de mi página de login
        
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.update(tabs[0].id, { url: loginUrl });
            });
        });
    } else {
        console.error('El botón de redirección no se encontró en el DOM.');
    }
});
