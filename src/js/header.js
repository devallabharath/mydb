const themeToggler = document.querySelector('span[themeToggler]')
const settingsToggler = document.querySelector('span[settingsToggler]')



export async function _themeDefault() {
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

    await window.theme.default(theme ? theme : 'dark')
}

export async function themeToggle() {
    const theme = await window.theme.toggle()
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

export function settingsToggle(){
    console.log("settings toggled");
}
