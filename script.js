const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const startButton = document.getElementById('startButton');

let currentLight = 0; // 0 = red, 1 = yellow, 2 = green

function changeLights() {
    // Reset all lights
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => light.classList.remove('active'));

    // Set active light for the first traffic light
    const light1Lights = light1.querySelectorAll('.light');
    light1Lights[currentLight].classList.add('active');

    // Set active light for the second traffic light (opposite logic)
    const light2Lights = light2.querySelectorAll('.light');
    const oppositeLight = currentLight === 2 ? 0 : (currentLight + 1) % 3;
    light2Lights[oppositeLight].classList.add('active');

    // Move to the next light in sequence
    currentLight = (currentLight + 1) % 3;
}

// Start the simulation
startButton.addEventListener('click', () => {
    setInterval(changeLights, 3000);
});