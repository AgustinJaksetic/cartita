// script.js
let currentStep = 0;
const steps = [
    'photo-text-1',
    'photo-text-2',
    'photo-text-3',
    'photo-text-4',
    'photo-text-5',
    'final-heart'
];

function openEnvelope() {
    const envelope = document.querySelector('.envelope');  // Agregué el punto para seleccionar la clase
    const content = document.querySelector('.content');    // Agregué el punto para seleccionar la clase
    
    envelope.style.transform = 'rotateY(300deg)';
    setTimeout(() => {
        envelope.style.display = 'none';
        content.style.display = 'block';
        showStep(currentStep);
    }, 500);
}

function showStep(stepIndex) {
    const step = steps[stepIndex];
    const element = document.getElementById(step);
    if (element) {
        element.style.display = 'block';
    }
}

document.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        const currentElement = document.getElementById(steps[currentStep]);
        if (currentElement) {
            currentElement.style.display = 'none';
        }
        currentStep++;
        showStep(currentStep);
    }
});