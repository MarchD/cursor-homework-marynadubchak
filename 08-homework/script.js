class Student {
    constructor(course, university, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = [5, 4, 4, 5];
        this.isDismissed = false;
    }

    getInfo() {
        return 'Студент ' + this.course + '-го курсу, ВНЗ: ' + this.university + ', ' + this.fullName; 
    }

    get Marks() {
        if(!this.isDismissed) {
            return this.allMarks;
        }
        return null;
    } 

    set Marks(mark) {
        if(!this.isDismissed) {
            return this.allMarks.push(mark);
        }
        return null;
    }

    getAverageMark() {
        if(this.isDismissed) {
            return null;
        } else {
            return this.allMarks.reduce((total, mark) =>  total + mark) / this.allMarks.length;
        }        
    }

    dismiss() {
        return this.isDismissed = true;
    }

    recover() { 
        return this.isDismissed = false;
    }
}


const student = new Student('5', 'ОНАЗ', 'Карина');
const student2 = new Student('2', 'ОНАЗ', 'Сергій');

console.log(student.getInfo());
student.Marks = 5;
console.log(`Оцінки студентки ${student.fullName} з останньою відміткою: ${student.Marks}`); 
console.log(`Середня оцінка ${student.fullName}: ${student.getAverageMark()}`); 

console.log(`Студент ${student2.getInfo()} подав заяву на виключення: ${student2.dismiss()}`);
console.log(`Оцінки студента ${student2.fullName}: ${student2.Marks}`);
console.log(`Середня оцінка студента ${student2.fullName}: ${student2.getAverageMark()}`);

student2.recover();
console.log(`Студент ${student2.fullName} повернувся до ВНЗ`); 
console.log(`${student2.fullName} пропустив багато матеріалу та отримав кол`);
student2.Marks = 1;

console.log(`Оцінки студента ${student2.fullName}: ${student2.Marks}`); 
console.log(`Середня оцінка студента ${student2.fullName}: ${student2.getAverageMark()}`);


/* ---------------------------------------------------------------------------------------------------------- */

class BudgetStudent extends Student {
    constructor(course, university, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000)
        }

    getScholarship() {
        if(this.getAverageMark() < 4) {
            return console.log(`Середня оцінка студента ${this.fullName} - ${this.getAverageMark()}, для стипендії має бути вище 4.0`);
        } else if (this.getAverageMark === null) {
            return console.log(`Студент більше не навчається у ВНЗ`);
        } else {
            return console.log(`Cтудент  ${this.fullName} отримав 1400 грн. стипендії`);
        }
    }

}

const budget = new BudgetStudent('5', 'ОНАЗ', 'Карина');
const budget2 = new BudgetStudent('2', 'ОНАЗ', 'Сергій');
budget2.Marks = 1;
budget.getScholarship();
budget2.getScholarship();