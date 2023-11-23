const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 560,
    icon: __dirname + '/_images/python-icon.ico',
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true, // Define para true para ocultar a barra de menus
    frame: false // Define para false para remover a estrutura da janela (borda e barra de título)
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
