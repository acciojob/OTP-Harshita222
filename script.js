//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            // If input length is 1, move focus to the next input
            if (input.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (event) => {
            // If backspace is pressed and input is empty, focus the previous input
            if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});
