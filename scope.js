const bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);