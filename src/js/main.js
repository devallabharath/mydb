window.addEventListener('load', _ => {
    _themeDefault()
})

async function _themeDefault() {
    const theme = localStorage.getItem('theme')
    const themeToggler = document.querySelector("span[themeToggler]")

    if (!theme || theme == 'dark') {
        localStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        themeToggler.setAttribute('title', 'change to Light Theme')
    } else {
        localStorage.setItem('theme', 'light')
        themeToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
        themeToggler.setAttribute('title', 'change to Dark Theme')
    }

    await window.theme.default(theme ? theme : 'dark')
}
