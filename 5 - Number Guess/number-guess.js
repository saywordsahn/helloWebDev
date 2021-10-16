let num = Math.floor(Math.random() * 100);

function submit() {
    let guess = Number(txtInput.value);

    if (guess > num) {
        alert('Gueses lower');
    } else if (guess < num) {
        alert('Guess higher');
    } else {
        alert('Great job, play again');
        num = Math.floor(Math.random() * 100);
    }
}
