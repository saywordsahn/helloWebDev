/*
You moved into a new Sharehouse and you want to create an app to display the next person who has to wash the dishes.
You have an array of names and the order starts with the first person, each time the person finishes the dishes
they click a next button and it displays the next person in the arrays name. When it gets to the last person in the
array, when they click the next button it should display the first person in the array and continue in order.
 */

let turnOrder = ['Besty', 'John', 'Timmy', 'Joan', 'Markus', 'Jonathan', 'Suzie'];

let currentIndex = 0;

lbl.innerText = turnOrder[currentIndex];

function getNext() {
    currentIndex++;

    if (currentIndex >= turnOrder.length) {
        currentIndex = 0;
    }

    lbl.innerText = turnOrder[currentIndex];

}