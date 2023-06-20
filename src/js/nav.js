export function Navigate(loc) {
    const main = document.querySelector("main")
    const pages = main.getElementsByTagName("div")
    const lis = document.querySelectorAll("nav ul li")

    for (const p of pages) {p.hidden = true}
    main.querySelector(`div[${loc}]`).hidden = false
    for (const li of lis) {li.removeAttribute("active")}
    document.querySelector(`nav ul li[${loc}]`).setAttribute("active", "")
}
