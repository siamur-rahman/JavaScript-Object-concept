const pen = {
   brand: 'econo',
   price: 10,
   writePoem: function (food) {
      console.log(food);
   }
}

const keys = Object.keys(pen);
const values = Object.values(pen);

for (const key in pen) {
   console.log(pen[key]);
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;

if (a === b) {

}



//advanced...optional

const bounded = pen.writePoem.bind(a);
aBounded();

//arrow function er nijosso kono this hoina take bind kore dite hoi


//this
