let header, nav, font_awesome;

window.addEventListener('load', async () => {
    // imports
    font_awesome = await import("./lib/font-awesome.js")
    header = await import("./js/header.js")
    nav = await import("./js/nav.js")

    // first things to do
    header._themeDefault()
})

// header toggle options
// triggers from the app.html
function Toggle (item) {
    item == "theme" ? header.themeToggle() : header.settingsToggle()
}

// side nav navigation
// triggers from the app.html
function Navigate(loc){
    nav.Navigate(loc)
}
