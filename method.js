
const student = {
   id: 101,
   balance: 5000,
   name: 'Rj kibria',
   major: 'Mathematics',
   subjects: ['english', 'economics', 'math 101', 'calculus'],
   bestfriend: {
      name: 'kundu',
      major: 'mathematics'
   },
   takeExam: function () {
      console.log(this.name, 'taking exam');
   },
   treatDey: function (expense, boksis) {
      this.balance = this.balance - expense - boksis;
      return this.balance;

   }
}
student.takeExam();

const remaining = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
// console.log(remaining);
// console.log(remaining2);

/* const student = {
   id: 101,
   balance: 5000,
   name: 'Rj kibria',
   major: 'Mathematics',
   subjects: ['english', 'economics', 'math 101', 'calculus'],
   bestfriend: {
      name: 'kundu',
      major: 'mathematics'
   },
   takeExam: function () {
      console.log(this.name, 'taking exam')
   },

}
student.takeExam();

const remaining = student.treatDey(900);
// const remaining2 = student.treatDey(500);
console.log(remaining);*/

/*
const student = {
   id: 101,
   balance: 5000,
   name: 'Rj kibria',
   major: 'Mathematics',
   subjects: ['english', 'economics', 'math 101', 'calculus'],
   bestfriend: {
      name: 'kundu',
      major: 'mathematics'
   },
   takeExam: function () {
      console.log(this.name, 'taking exam');
   },
   treatDey: function (expense) {
      this.balance = this.balance - expense;
      return this.balance;
   }
}
student.takeExam();

const remaining = student.treatDey(900);
const remaining2 = student.treatDey(500);
// console.log(remaining);
console.log(remaining2);*/


/*
const student = {
   id: 101,
   balance: 5000,
   name: 'Rj kibria',
   major: 'Mathematics',
   subjects: ['english', 'economics', 'math 101', 'calculus'],
   bestfriend: {
      name: 'kundu',
      major: 'mathematics'
   },
   takeExam: function () {
      console.log(this.name, 'taking exam');
   },
   treatDey: function (expense, boksis) {
      this.balance = this.balance - expense - boksis;
      return this.balance;
   }
}
student.takeExam();

const remaining = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining);
console.log(remaining2);*/


