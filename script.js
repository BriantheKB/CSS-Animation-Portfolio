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

// JavaScript for Progress Bar (Example)
const progressBar = document.querySelector('.progress-bar');
let progress = 0;

// Function to simulate progress
function simulateProgress() {
    progress += 1;
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';

    if (progress < 100) {
        setTimeout(simulateProgress, 100); // Adjust timing as necessary
    }
}

simulateProgress(); 

// JavaScript for Waving Text (if needed)
window.onload = function() {
    // JavaScript for Waving Text
    const wavingText = document.querySelector('.waving-text');
    if (wavingText) {
        wavingText.innerHTML = wavingText.textContent.split('').map(function(c) {
            return c === ' ' ? '&nbsp;' : '<span>' + c + '</span>';
        }).join('');
    }
};

const radio = document.querySelector('input[type="radio"]');
radio.addEventListener('change', (event) => {
    if (event.target.checked) {
        // Radio button is checked
        const selectedValue = event.target.value;
        // Perform actions based on the selected radio button value
        console.log(`Selected value: ${selectedValue}`);
    }
});

