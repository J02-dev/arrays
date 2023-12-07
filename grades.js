document
     .querySelector('form')
    .addEventListener('submit', setGrade)

let grades = [];

function setGrade(e){
    e.preventDefault();
    let name = document.querySelector('#name').value
    let grade = document.querySelector('#grade').value
    console.log({name,grade})
    grades.push(grades);
    printGrades();
}

function printGrades() {
    let o = document.querySelector('#output');
    let sum = 0;
    for (let i=0; i<grades.length;i++) {
        sum += grades[i].grade;
    }
    let avg = sum / grades.length;
    o.innerText = avg; 
}