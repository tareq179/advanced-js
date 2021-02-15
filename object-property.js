const students = [
        { id: 21, name: 'Omor sunny' },
        { id: 31, name: 'Maannaaa' },
        { id: 41, name: 'Moyouri' },
        { id: 71, name: 'DeepJol' },
    ]
    // const output = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.id;
//     output.push(result);
// }

// console.log(output);


const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const bigger1 = students.find(s => s.id > 40);

console.log(bigger1);