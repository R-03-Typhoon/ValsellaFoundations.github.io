function tabbar() {
    const tabbar = document.querySelector(".tabbar")
    const tabbtns = document.querySelectorAll(".tab-btn")
    const tabs = document.querySelectorAll(".tab")
    tabbar.addEventListener("click", (e) => {
      const tabid = e.target.dataset.id
      console.log(tabid)
      for (let i = 0; i < tabs.length; i++){
        const currentTab = tabs[i]
        currentTab.classList.remove("active-tab")
        const currentTabbtn = tabbtns[i]
        currentTabbtn.classList.remove("active")
      }
      const targetTab = document.querySelector("#"+tabid)
      targetTab.classList.add("active-tab")
      e.target.classList.add("active")
    })
  }
  
  export default tabbar