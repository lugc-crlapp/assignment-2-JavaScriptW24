// Selecting elements from the DOM
const selectList = document.querySelector('#selectList'),
      imageDisplay = document.querySelector('#imageDisplay'),
      studentIdDisplay = document.querySelector('#studentIdDisplay'),
      customNumberInput = document.querySelector('#customNumber'),
      customColorButton = document.querySelector('#customColorButton'),
      randomColorButton = document.querySelector('#randomColorButton'),
      body = document.body;

// List of images for the gallery
const imageSources = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// Populate select list on page load
document.addEventListener('DOMContentLoaded', function() {
    imageSources.forEach(image => {
        let option = document.createElement('option');
        option.value = `img/${image}`;
        option.textContent = image.slice(0, -4); // Remove file extension for display
        selectList.append(option);
    });
});

// Assigns a new background color based on user input
function applyCustomColor() {
    let number = parseInt(customNumberInput.value, 10);
    if (!isNaN(number)) {
        studentIdDisplay.textContent = 'Cameron Lapp - 200589798';
        body.style.backgroundColor = determineColor(number);
    } else alert("Valid number required.");
}

// Generates a random color for the background
function applyRandomColor() {
    let random = Math.floor(Math.random() * 101);
    body.style.backgroundColor = determineColor(random);
}

// Updates the image displayed to the user's selection
selectList.onchange = () => imageDisplay.src = selectList.value;

// Change background color and display student ID on button click
customColorButton.onclick = applyCustomColor;
randomColorButton.onclick = applyRandomColor;

// Determines the color corresponding to the input number
function determineColor(num) {
    return num < 0 || num > 100 ? 'red' : 
           num <= 20 ? 'green' : 
           num <= 40 ? 'blue' : 
           num <= 60 ? 'orange' : 
           num <= 80 ? 'purple' : 'yellow';
}
