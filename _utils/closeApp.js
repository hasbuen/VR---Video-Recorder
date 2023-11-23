
// Função para fechar a aplicação
function closeApp() {
  const { remote } = require('electron');
  let window = remote.getCurrentWindow();
  window.close();
}