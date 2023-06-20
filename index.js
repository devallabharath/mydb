const { app, BrowserWindow,ipcMain, nativeTheme, Menu } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
		width: 900,
		height: 550,
		minWidth: 900,
		minHeight: 550,
		center: true,
        darkTheme: true,
        transparent: false,
		// icon: 'app/assets/media/icon.ico',
		titleBarStyle: 'hidden',
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
    })

    // createMenu(win)
    themes()

    win.loadFile('src/app.html')

	win.on('closed', () => {
		app.quit();
	});
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// Theme
function themes() {
	ipcMain.handle('theme:toggle', _ => {
		if (nativeTheme.shouldUseDarkColors) nativeTheme.themeSource = 'light'
		else nativeTheme.themeSource = 'dark'
		return nativeTheme.shouldUseDarkColors
  })
  ipcMain.handle('theme:light', _ => nativeTheme.themeSource = 'light')
  ipcMain.handle('theme:dark', _ => nativeTheme.themeSource = 'dark')
}

// Menu
/**
 * @param {BrowserWindow} win
 */
function createMenu(win) {
    const menu = [
        {
            label: 'tools',
            submenu: [
                { label: 'reload', accelerator: 'CmdOrCtrl+R', click() { win.webContents.reload() } },
                { label: 'reload and clear cache', accelerator: 'CmdOrCtrl+Shift+R', click() { win.webContents.reloadIgnoringCache() } },
                {
                    label: 'developer tools', accelerator: 'CmdOrCtrl+Shift+I', click() {
                        win.webContents.isDevToolsOpened() || win.webContents.isDevToolsFocused() ? win.webContents.closeDevTools() : win.webContents.openDevTools()
                    }
                },
                { label: 'fullscreen', accelerator: 'F11', click() { win.isFullScreen() ? win.setFullScreen(false) : win.setFullScreen(true) } },
                { label: 'exit', accelerator: 'Cmd+Q', click() { app.quit() } }
            ]
        },
		{
            label: 'File',
            submenu: [
                { label: 'reload', accelerator: 'CmdOrCtrl+R', click() { win.webContents.reload() } },
                { label: 'reload and clear cache', accelerator: 'CmdOrCtrl+Shift+R', click() { win.webContents.reloadIgnoringCache() } },
                {
                    label: 'developer tools', accelerator: 'CmdOrCtrl+Shift+I', click() {
                        win.webContents.isDevToolsOpened() || win.webContents.isDevToolsFocused() ? win.webContents.closeDevTools() : win.webContents.openDevTools()
                    }
                },
                { label: 'fullscreen', accelerator: 'F11', click() { win.isFullScreen() ? win.setFullScreen(false) : win.setFullScreen(true) } },
                { label: 'exit', accelerator: 'Cmd+Q', click() { app.quit() } }
            ]
        }
	]
    Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}
