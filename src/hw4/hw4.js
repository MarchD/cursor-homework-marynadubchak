const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
let arrOfPairs = [];

function getPairs(arr) {
    let copyStudents = [...arr];
    arrOfPairs.push(([copyStudents[0], ' та ', copyStudents[2]]).join('')
    );
    arrOfPairs.push(([copyStudents[1], ' та ', copyStudents[3]]).join(''));
    arrOfPairs.push(([copyStudents[4], ' та ', copyStudents[5]]).join(''));
    return arrOfPairs;
}

const container = document.getElementById('homeWork4');

export default container.innerHTML = `<h2>HW#4</h2><p>${getPairs(students)}</p>`;
