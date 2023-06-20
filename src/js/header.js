const themeToggler = document.querySelector('span[themeToggler]')
const settingsToggler = document.querySelector('span[settingsToggler]')

themeToggler.addEventListener('click', _ => themeToggle())
settingsToggler.addEventListener('click', _ => settingsToggle())

async function themeToggle() {
    const theme = await window.theme.toggle()
    if (theme) {
        localStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        themeToggler.setAttribute('title', 'change to Light Theme')
    } else {
        localStorage.setItem('theme', 'light')
        themeToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
        themeToggler.setAttribute('title', 'change to Dark Theme')
    }
}

function settingsToggle(){
    console.log("settings toggled");

}
