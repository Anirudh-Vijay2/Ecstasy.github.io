var i = 0;
var txt = '"Taste the Bliss: Where Ecstasy Meets Culinary Art!"'
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("slogan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()
const toggleBtn = document.getElementById('toggle-btn');
const rightNav = document.querySelector('.right-nav');
const box = document.querySelector('.box')
toggleBtn.addEventListener('click', () => {
  if (rightNav.style.display == 'none') {
    rightNav.style.display = 'flex'
    box.style.opacity = '0.1';
    toggleBtn.innerHTML = "<i class='bx bx-x' ></i>";
  }
  else {
    rightNav.style.display = 'none'
    box.style.opacity = '1';
    toggleBtn.innerHTML = "<i class='bx bx-menu'></i>"
  }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-lnk')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.screenY;
    let ofset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= ofset && top < ofset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.nav-lnk[href*=' + id + ']')
      })
    };
  });
}

const api = "../api/api.json";
// let main = [];
let card;
let main = []
let cardsDisplay = document.getElementById('display')
fetch(api)
  .then(response => response.json())
  .then(data => {
    // console.log(card)
    main = data.Food.map((crr) => {
      cardsDisplay.innerHTML += `
      <div class="card" data-target-${crr.type}>
      <div class="card-image" style="background-image: url('${crr.image}')"></div>
      <div class="product-name-price"><span class="product-name product-item">${crr.Name}</span><span class="product-price product-item">${crr.price}</span></div>
      <div class="product-review">
          <span class="review-text product-item">Rating</span>
          <span class="review-stars product-item">
              <i class='bx bxs-star star' ></i>
              <i class='bx bxs-star star' ></i>
              <i class='bx bxs-star star' ></i>
              <i class='bx bxs-star star' ></i>
              <i class='bx bxs-star star' ></i>
          </span>
      </div>
      <div class="product-type">
          <span class="type-text product-item">Type:</span>
          <span class="type-content product-item">${crr.type}</span>
      </div>
      <div class="card-button">
          <button class="addBtn">Add</button>
          <button class="removeBtn">Remove</button>
      </div>
  </div>`;
     return {itemName: crr.Name, element: card, type : crr.type}
    });
  });
