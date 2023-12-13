// JavaScript for Modal Popup
const modalBtn = document.querySelector('.modal-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// JavaScript for Tabs Switch
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');
        
        // Remove the "active" class from all tabs
        tabs.forEach(tab => tab.classList.remove('active'));

        // Show the clicked tab content
        tabContents[index].style.display = 'block';

        // Add the "active" class to the clicked tab
        tab.classList.add('active');
    });
});

// Initialize first tab and content
tabs[0].classList.add('active');
tabContents[0].style.display = 'block';

const progressBarContainer = document.querySelector('.progress-bar__container');
const progressBar = document.querySelector('.progress-bar');
const progressBarText = document.querySelector('.progress-bar__text');

const progressBarStates = [0, 7, 27, 34, 68, 80, 95, 100];

let time = 0;
let endState = 100;

progressBarStates.forEach(state => {
  let randomTime = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    if(state == endState){
      gsap.to(progressBar, {
        x: `${state}%`,
        duration: 2,
        backgroundColor: '#4895ef',
        onComplete: () => {
          progressBarText.style.display = "initial";
          progressBarContainer.style.boxShadow = '0 0 5px #4895ef';
        }
      });
    }else{
      gsap.to(progressBar, {
        x: `${state}%`,
        duration: 2,
      });
    }
  }, randomTime + time);
  time += randomTime;
})

// JavaScript for Waving Text (if needed)
window.onload = function() {
    const wavingText = document.querySelector('.waving-text');
    if (wavingText) {
        wavingText.innerHTML = wavingText.textContent.split('').map(function(c) {
            return '<span>' + (c === ' ' ? '&nbsp;' : c) + '</span>';
        }).join('');
    }
};



