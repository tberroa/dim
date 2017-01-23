import {app, BrowserWindow} from "electron";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

// Function used to create the main window for the application.
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Disable the menu bar.
  mainWindow.setMenu(null);

  // Load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/scenes/Home/index.html`);

  // Dereference the window object when the window is closed.
  mainWindow.on("closed", () => {
    mainWindow = null
  });
}

// Electron is ready to create browser windows.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
