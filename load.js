const { contextBridge, ipcRenderer } = require('electron')

// Dark Mode
contextBridge.exposeInMainWorld('theme', {
    toggle: _ => ipcRenderer.invoke('theme:toggle'),
    default: (theme = null) => theme == 'dark' ? ipcRenderer.invoke('theme:dark') : ipcRenderer.invoke('theme:light')
})
