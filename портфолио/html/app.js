const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})





const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const cards = document.querySelectorAll(".container-team > div");

let cardIndex = 0;

nextButton.onclick = function () {
   cards[cardIndex].classList.remove("show");

   if (cardIndex >= cards.length -1) {
     cardIndex = 0;
   } else {
     cardIndex = cardIndex + 1;
}

  cards[cardIndex].classList.add("show");
};

prevButton.onclick = function () {
  cards[cardIndex].classList.remove("show");

     if (cardIndex <= 0) {
      cardIndex = cards.length - 1;
} else {
       cardIndex = cardIndex - 1;
}

    cards[cardIndex].classList.add("show");
};