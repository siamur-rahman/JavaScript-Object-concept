/*const kibria = {
   id: 101,
   money: 5000,
   name: 'Rj kibria',

   treatDey: function (expense) {
      this.money = this.money - expense;
      console.log(this);
      return this.money;
   }
}


kibria.treatDey(100);
*/

/*
const kibria = {
   id: 101,
   money: 5000,
   name: 'Rj kibria',

   treatDey: function (expense) {
      this.money = this.money - expense;
      console.log('hare',this);
      return this.money;
   }
}

const heroBalam = {
   id: 101,
   money: 5000,
   name: 'Hero Balam',

}

// kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);//ekhane bind er vitor heroBlam this er value hisebe kaj korbe
heroTreatDey(100);*/


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
   money: 6000,
   name: 'Hero Balam',

}

const heroGulam = {
   id: 101,
   money: 8000,
   name: 'Hero Gulam',

}

// kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);//ekhane heroBlam this er value hisebe kaj korbe

const gulamTreatDey = kibria.treatDey.bind(heroGulam);//ekhane heroGulam this er value hisebe kaj korbe
heroTreatDey(300);
heroTreatDey(500);
gulamTreatDey(800);