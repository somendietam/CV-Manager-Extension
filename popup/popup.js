document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('userInfo', (result) => {
        console.log('Información recuperada:', result.userInfo);
        if (result.userInfo) {
            const userInfoElement = document.getElementById('userInfo');
            if (userInfoElement) {
                userInfoElement.textContent = `Nombre: ${result.userInfo.name}, Correo: ${result.userInfo.email}`;
            }
        } else {
            console.log('No hay información de usuario disponible.');
        }
    });
});

  
  document.getElementById('redirectButton').addEventListener('click', () => {
    // URL de tu página de login
    const loginUrl = 'http://localhost:5173'; // URL de mi página de login
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.update(tabs[0].id, { url: loginUrl });
    });
  });
  