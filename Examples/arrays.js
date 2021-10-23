function celToFahr(celValue) {
    return 1.8 * celValue + 32;
}

// print each number in the array on a separate line
let arr = [17, 18, 4, 7, 8, 9, 20, 1, 4, 8];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(celToFahr(arr[i]));
}