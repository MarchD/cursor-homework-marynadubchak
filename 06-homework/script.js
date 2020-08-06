const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];



/* --------------------------------------------#1 FUNCTION-------------------------------------------- */


function getSubjects(student){
    const subject = Object.keys(student.subjects);
    let rename = [];
    const finder = new RegExp ('_', 'gi');

    subject.map(sub => {
        const newSubject = sub.replace(finder, ' ');
        rename.push(newSubject.substring(0, 1).toUpperCase() + newSubject.substring(1).toLowerCase());
    });
    
    return rename;
}
console.log('Предмети студена ' + students[0].name + ' це - ' + getSubjects(students[0]) + ' ;');



/* --------------------------------------------#2 FUNCTION-------------------------------------------- */


function getAverageMark(student) {
    const marks = Object.values(student.subjects);
    let  allMarks = [];

    for (let i = 0; i < marks.length; i++) {
        allMarks = allMarks.concat(marks[i]);
    }

    const total = allMarks.reduce((total, mark) =>  total + mark);
    const avaregeMark = (total / allMarks.length).toFixed(2);
    return avaregeMark;
}


console.log('Середня оцінка ' + students[0].name + ': ' + getAverageMark(students[0]) + ';');



/* --------------------------------------------#3 FUNCTION-------------------------------------------- */


function getStudentInfo(student) {
    const studentInfo = {
        course: student.course,
        name: student.name,
        getAverageMark: getAverageMark(student),
    }

    const generalInfo = Object.entries(studentInfo);
    const getString = JSON.stringify(generalInfo);

     return getString;
}

console.log('Загальне інфо про студента: ' + getStudentInfo(students[0]));


/* --------------------------------------------#4 FUNCTION-------------------------------------------- */


function getStudentsNames(student) {
    let names = []
    for(let i = 0; i < student.length; i++) {
         names.push(Object.values(students[i].name).join(''));
    }   
    return names.sort(); 
}

console.log('Імена в алфавітному порядку:' + getStudentsNames(students));


/* --------------------------------------------#5 FUNCTION-------------------------------------------- */


function getBestStudent(student) {
        let maxNumber = 0;
        const name = [];

        student.map(stud => {
            stud.getAverageMark = (Number(getAverageMark(stud)));
            maxNumber = Math.max(stud.getAverageMark);
        })

        student.map(function searchStudent (stud) { 
            if (stud.getAverageMark == maxNumber) {
                name.push(stud.name);
        }
    });

    return name[0];
    }


console.log('Найкращий студент: ' + getBestStudent(students));


/* --------------------------------------------#6 FUNCTION-------------------------------------------- */

let myWord = 'дужеважкадомашка';

function calculateWordLetters(word) {
    const gotLetters = word.split('');

    const letterToCountList = [];

    gotLetters.forEach(el => {
        let finder = letterToCountList.find(item => item.letter == el);
        if (finder) {
            finder.count = finder.count + 1;
        } else {
            let obj = {
                letter: el,
                count: 1
            }
            letterToCountList.push(obj);
        }
    });


    let obj = {};

    for(let i = 0; i < letterToCountList.length; i++) {
        let key = letterToCountList[i].letter;
        obj[key] = letterToCountList[i].count;
    }
    return JSON.stringify(obj);
}

console.log('Повторення літер: ' + calculateWordLetters(myWord));
