function Navigate(loc) {
    // const main = document.querySelector("main")
    const lis = document.querySelectorAll("nav ul li")

    for (const li of lis) {li.removeAttribute("active")}
    document.querySelector(`nav ul li[${loc}]`).setAttribute("active", "")
}

module.exports = {
    Navigate
};
