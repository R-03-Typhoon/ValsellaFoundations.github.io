import carousel from "../components/carousel.js"
import getAllVolunteers from '../api.js'
const url = 'https://english.pockethost.io/'
function displayAllCards(program){
  const wrapper = document.querySelector(".wrapper")
  wrapper.innerHTML = ``
  for (let i = 0; i < program.length; i++){
    let currentProgram = program[i]
    wrapper.innerHTML = wrapper.innerHTML + `
    <div class="card">
                <img src="${url}/api/files/${currentProgram.collectionId}/${currentProgram.id}/${currentProgram.image}" alt="">
                <p>${currentProgram.title}</p>
                <div class="btn-group">
                  <a href="detail.html?id=${currentProgram.id}" class="btn btn-main" id="showDetailBtn" role="button">SHOW DETAIL</a>
                </div>
            </div>
    `
  }
}
window.addEventListener('DOMContentLoaded', async () => {
  carousel()
  const volunteers = await getAllVolunteers()
  // console.log(volunteers)
  displayAllCards(volunteers)
})