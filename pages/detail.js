import tabbar from "../components/tabbar.js"
import displayDetail from "../components/displaydetail.js"
// import getOneVolunteer from "../api.js"
import PROGRAMS from "../data.js"
window.addEventListener('DOMContentLoaded', async () => {
    console.log("working on detail.js")
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    console.log(id)
    // const e = await getOneVolunteer(id)
    // console.log(e)
    // displayDetail(e)
    const foundProgram = PROGRAMS.find((program) =>program.id == id)
    displayDetail(foundProgram)
    tabbar()
})