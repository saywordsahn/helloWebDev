// We are selling pizzas and need to track who gets the next pizza baked.
// We are given an array of operations that contains either a character 'c' for customer or a character 'b' for when
// a pizza is baked.
// if the operation is 'c' then we take the customer's name and put it in the queue.
// if the operation is 'b' then we give a pizza to the customer that arrived first
// the operations are read in order
// who is the next in line at the end of the operations?

let operation = ['c', 'c', 'c', 'b', 'b', 'c', 'b', 'b', 'c', 'c', 'c', 'b'];
let customer = ['Ben', 'Dan', 'Mark', 'Asuka', 'Maria', 'Vish', 'Juliette', 'Pamela', 'Spike']