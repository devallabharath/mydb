const { ipcRenderer } = require("electron")

const themeToggler = document.querySelector('span[themeToggler]')
const settingsToggler = document.querySelector('span[settingsToggler]')

async function themeDefault() {
    const theme = localStorage.getItem('theme')

    if (!theme || theme == 'dark') {
        localStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
        themeToggler.setAttribute('title', 'Light Theme')
    } else {
        localStorage.setItem('theme', 'light')
        themeToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        themeToggler.setAttribute('title', 'Dark Theme')
    }
    toggle(theme ? theme : "dark")

    function toggle(t=null){
        t == 'dark' ? ipcRenderer.invoke('theme:dark') : ipcRenderer.invoke('theme:light')
    }
}

async function themeToggle() {
    const theme = ipcRenderer.invoke('theme:toggle')
    if (theme) {
        localStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
        themeToggler.setAttribute('title', 'Light Theme')
    } else {
        localStorage.setItem('theme', 'light')
        themeToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        themeToggler.setAttribute('title', 'Dark Theme')
    }
}

function settingsToggle(){
    console.log("settings toggled");
}

module.exports = {
    themeDefault,
    themeToggle,
    settingsToggle,
};
