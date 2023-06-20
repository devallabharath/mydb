let header, nav, font_awesome;

window.addEventListener('load', async () => {
    // imports
    font_awesome = await import("./lib/font-awesome.js")
    header = await import("./js/header.js")
    nav = await import("./js/nav.js")

    header._themeDefault()
})

async function Toggle (item) {
    item == "theme" ? header.themeToggle() : header.settingsToggle()
}

async function Navigate(loc){
    nav.Navigate(loc)
}
