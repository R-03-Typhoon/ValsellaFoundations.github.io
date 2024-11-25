
function displayDetail(program){
    const detailcontainer = document.querySelector(".detail-container")
    detailcontainer.innerHTML = `
    <div class="overlay">
          <div class="detail-header">
            <h1>${program.title}</h1>
            <div class="tabbar">
              <button class="tab-btn active" data-id="detail">Detail</button>
              <button class="tab-btn" data-id="video">Video</button>
              <button class="tab-btn" data-id="reviews">Member Testimony</button>
            </div>
          </div>
          <div class="detail-body">
            <section class="tab detail-tab active-tab" id="detail">
              <p>
                <ion-icon name="information-circle"></ion-icon>
                <span class="text">Overview: ${program.info}</span>
              </p>
              <p>
                <ion-icon name="calendar"></ion-icon>
                <span class="text">When: Every Weekend</span>
              </p>
              <p>
                <ion-icon name="compass"></ion-icon>
                <span class="text">Location: ${program.where}</span>
              </p>
              <a href="register.html">Register Now</a>
            </section>
  
            <section class="tab video-tab" id="video">
              <iframe src="${program.video}" allowfullscreen></iframe>
            </section>
  
            <section class="tab review-tab" id="reviews">
              <div class="product-review-wrapper">
          
                <div class="review">
                  <img src="${program.image}" alt="">
                  <h4>${program.username}</h4>
                  <p>${program.testimony}:</p>
                </div>
        
              </div>
            </section>
  
          </div>
        </div>
    
    `

}
export default displayDetail