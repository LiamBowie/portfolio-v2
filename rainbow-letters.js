const rainbowLetters = document.querySelectorAll('.rainbow-letter');

rainbowLetters.forEach(letter => {
    letter.addEventListener('animationend', () => {
        letter.classList.remove('animate');
    });
    letter.addEventListener('mouseover', () => {
        letter.classList.add('animate');
    });
});