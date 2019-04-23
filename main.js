var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var showdown = require('showdown');
converter = new showdown.Converter();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 300
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
