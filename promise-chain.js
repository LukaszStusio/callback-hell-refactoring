console.log('It\'s alive!!!');

// 1 - Change the text to "Hell opened" when clicked, after one second
// 2 - Make it a square after one second
// 3 - Make it pink after half a second
// 4 - Make it circle after quarter a second
// 5 - Make it violet after after 0.3 second
// 6 - Fade it out after half a second

const trigger = document.querySelector('.trigger');

const noiseBoxChaos = document.querySelector('.noise-box-chaos');

const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.innerHTML = "Reset the Hell";


// new code
const wait = (ms = 0) =>  new Promise(resolve => setTimeout(resolve, ms));

function animate(e) {
    const element = e.currentTarget;

    // 1 - Change the text to "Hell opened" when clicked, after one second
    // 2 - Make it a square after one second
    wait(1000).then(() => {
        element.textContent = 'Hell opened';
        element.classList.remove('circle');
        return wait(500);
    })
    .then(() => {
        // 3 - Make it pink after half a second
        element.classList.add('pink');
        return wait(250);
    })
    .then(() => {
        // 4 - Make it circle after quarter a second
        element.classList.add('circle');
        return wait(300);
    })
    .then(() => {
        // 5 - Make it violet after after 0.3 second
        element.classList.remove('pink');
        element.classList.add('violet');
        return wait(500);
    })
    .then(() => {
        // 6 - Fade it out after half a second
        element.classList.add('fade-out');
        return wait(510);
    })
    .then(() => {
        // 7 - bonus: remove the element, add reset button, remove rest & add default button;
        noiseBoxChaos.appendChild(resetButton);
        const buttonToRemove = document.querySelector('.reset-button');

        buttonToRemove.addEventListener('click', function(event) {
            event.currentTarget.remove();
            element.classList.remove('violet', 'fade-out')
            element.textContent = 'Click me again!';
        });
    });
};

trigger.addEventListener('click', animate);





// old code
trigger.addEventListener('clickXXX', function(event) {
    const element = event.currentTarget;
    // 1 & 2
    setTimeout(function() {
        element.textContent = 'Hell opened';
        element.classList.remove('circle');
        // 3
        setTimeout(function() {
            element.classList.add('pink');
            // 4
            setTimeout(function(){
                element.classList.add('circle');
                // 5
                setTimeout(function() {
                    element.classList.remove('pink');
                    element.classList.add('violet');
                    // 6
                    setTimeout(function() {
                        element.classList.add('fade-out');
                        // 7 - bonus: remove the element, add reset button, remove rest & add default button;
                        setTimeout(function() {
                            noiseBoxChaos.appendChild(resetButton);

                            const buttonToRemove = document.querySelector('.reset-button');
                            buttonToRemove.addEventListener('click', function(event) {
                                event.currentTarget.remove();
                                element.classList.remove('violet', 'fade-out')
                                element.textContent = 'Click me again!';

                            });
                        }, 510);
                    }, 500);
                }, 300);
            }, 250)
        }, 500);
    }, 1000);
});


