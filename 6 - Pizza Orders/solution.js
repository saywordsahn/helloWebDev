let operation = ['c', 'c', 'c', 'b', 'b', 'c', 'b', 'b', 'c', 'c', 'c', 'b'];
let customer = ['Ben', 'Dan', 'Mark', 'Asuka', 'Maria', 'Vish', 'Juliette', 'Pamela', 'Spike']

let queue = [];

let customerIndex = 0;

for (let i = 0; i < operation.length; i++) {
    if (operation[i] === 'c') {
        queue.push(customer[customerIndex]);
        customerIndex++;
    } else {
        queue.shift();
    }
}

console.log(queue[0]);
