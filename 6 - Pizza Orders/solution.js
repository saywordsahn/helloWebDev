let operation = ['c', 'c', 'c', 'b', 'b', 'c', 'b', 'b', 'c', 'c', 'c', 'b'];
let customer = ['Ben', 'Dan', 'Mark', 'Asuka', 'Maria', 'Vish', 'Juliette', 'Pamela', 'Spike']

let queue = new Array();

let peopleIndex = 0;

for (let i = 0; i < operation.length; i++) {
    if (operation[i] === 'c') {
        queue.push(customer[peopleIndex]);
        peopleIndex++;
    } else {
        queue.shift();
    }
}

console.log(queue[0]);
