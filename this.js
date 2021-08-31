console.log(this);
/*
const kibria = {
   id: 101,
   money: 5000,
   name: 'Rj kibria',
   treatDey: function (expense) {
      this.money = this.money - expense;
      console.log('hare', this);
      return this.money;
   }
}

const heroBalam = {
   id: 101,
   money: 5000,
   name: 'Hero Balam',

}

function add(a, b) {
   console.log(this)
}

//inspact e giye----add() k call korle ans: window asbe
*/

/*

console.log(this);

const kibria = {
   id: 101,
   money: 5000,
   name: 'Rj kibria',
   treatDeyArrow: () => {
      console.log(this)
   },
   treatDey: function (expense) {
      this.money = this.money - expense;
      console.log('hare', this);
      return this.money;
   }
}

const heroBalam = {
   id: 101,
   money: 5000,
   name: 'Hero Balam',

}

function add(a, b) {
   console.log(this)
}

///inspact e giye----kibria.treatDey(); k call korle ans:KIBRIA (KEI BUJHABE this er value kibria e)
//inspact e giye----kibria.treatDeyArrow(); k call korle ans: window asbe

// |||||||||||ARROW FUNCTION R REGULAR FUNCTION ER DIFFERENCE|||||||||||||||||||||
//ARROW FUNCTION TAR NIJOSSO VALUE HOLD KORTE PARE NA WINDOW TE CHOLE ZAI*/







console.log(this);

const kibria = {
   id: 101,
   money: 5000,
   name: 'Rj kibria',

   treatDeyArrow: () => {
      console.log(this)
   },

   treatDeyInside: function () {
      const myArrow = () => console.log(this);
      myArrow();
   },

   treatDey: function (expense) {
      this.money = this.money - expense;
      console.log('hare', this);
      return this.money;
   }
}

const heroBalam = {
   id: 101,
   money: 5000,
   name: 'Hero Balam',

}

function add(a, b) {
   console.log(this)
}

//inspact e giye----kibria.treatDey(); k call korle ans:KIBRIA (KEI BUJHABE this er value kibria e)
//inspact e giye----kibria.treatDeyArrow(); k call korle ans: window asbe

// |||||||||||ARROW FUNCTION R REGULAR FUNCTION ER DIFFERENCE|||||||||||||||||||||
//ARROW FUNCTION TAR NIJOSSO VALUE HOLD KORTE PARE NA WINDOW TE CHOLE ZAI
//regular function hole etai hobe