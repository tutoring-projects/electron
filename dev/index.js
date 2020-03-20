const { app, BrowserWindow } = require('electron')

const path = require('path')

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    // transparent: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.loadURL('http://localhost:8080')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
