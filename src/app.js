require("./lib/font-awesome.js")
const {themeDefault, themeToggle, settingsToggle} = require("./js/header.js")
const {Navigate} = require("./js/nav.js")
const $ = require("jquery")
const DataTable = require("./lib/datatables.js")(window, $)
// require( 'datatables.net-responsive' );
const axios = require("./lib/axios.js")

// Dom Elements
const themeToggler = document.querySelector('span[themeToggler]')
const settingsToggler = document.querySelector('span[settingsToggler]')

// Event listeners
    // first things to do
window.addEventListener('load', async ()=>themeDefault())
    // header toggler options
themeToggler.addEventListener("click", ()=>themeToggle())
settingsToggler.addEventListener("click", ()=>settingsToggle())

// Test axios
const url = "https://api.jsonbin.io/v3/b/60d0a7278a4cd025b7a26537"
const axiosheaders = {
    headers: {"X-Master-Key" : "$2b$10$018cqaD.b2ofBfd0x634Ze0DURGxJhR9ZNGxkjF/MtpLWNmreNUQS"}
}

axios.get(url, axiosheaders)
.then(res=>Table(res.data))

// Set Table
function Table(data){
    // console.log(data)
    const Data = [];
    data["record"]["Users"].forEach(user => {
        usrArray = []
        const {Id, Name, Mobile, Amount} = user
        Data.push([Id, Name, Mobile, Amount]);
    })

    // let table = new DataTable('#table', {
    //     data: Data,
    //     columns: [
    //         { title: "ID" },
    //         { title: "Name" },
    //         { title: "Mobile" },
    //         { title: "Amount" }],
    //     // scrollY: '65vh',
    //     scrollCollapse: true,
    //     // responsive: true,
    //     paging: true
    // })
    $('#table').DataTable({
        data: Data,
        columns: [
            { title: "ID" },
            { title: "Name" },
            { title: "Mobile" },
            { title: "Amount" }],
        // scrollY: '65vh',
        select: true,
        scrollCollapse: true,
        // responsive: true,
        paging: true
    });
}
