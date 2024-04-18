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

describe('OTP Verification Test', () => {
    it('should input the OTP correctly', () => {
        // Visit the page
        cy.visit(baseUrl + "/main.html");

        // Define an array with the OTP values
        const otp = [5, 1, 7, 2, 9, 6];
        
        // Iterate over each OTP value and input it
        otp.forEach((digit, index) => {
            // Get the input field and type the digit
            cy.get(`.code-container input.code`).eq(index).type(digit);
            
            // Wait for the next input field to be focused
            if (index < otp.length - 1) {
                cy.focused().should("have.id", `code-${index + 2}`);
            }
        });
    });
});
