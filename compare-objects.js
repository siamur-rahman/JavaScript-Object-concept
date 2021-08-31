/*const first = { a: 1 };
const second = { a: 1 };

if (first == second) {
   console.log('objects are equal')
}
else { console.log('objects are differnt') }*/


/*
const first = { a: 1 };
const second = { a: 1 };

if (first === second) {
   console.log('objects are equal')
}
else { console.log('objects are differnt') }*/



/*
const first = { a: 1 };
const second = { a: 1 };
const third = first;

if (first === third) {
   console.log('objects are equal')
}
else { console.log('objects are differnt') }*/


/*
const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === third) {
   console.log('objects are equal')
}
else { console.log('objects are differnt') }

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

if (JSON.stringify(first) === JSON.stringify(second)) {
   console.log('objects are equal')
}
*/


/*
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

if (JSON.stringify(first) === JSON.stringify(second)) {
   console.log('objects are equal')
}
else {
   console.log('objects are different')
}*/

/*
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

if (JSON.stringify(first) === JSON.stringify(second)) {
   console.log('objects are equal')
}
else {
   console.log('objects are different')
}
*/

/*
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };

function compareObjects(obj1, obj2) {
   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
   }
   for (const prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
         return false;
      }
   }
   return true;
}
const isEqual = compareObjects(first, second);
console.log(isEqual);//ans:true

*/

/*
const first = { a: 1, b: 2 };
const second = { b: '2', a: 1 };

function compareObjects(obj1, obj2) {
   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
   }
   for (const prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
         return false;
      }
   }
   return true;
}
const isEqual = compareObjects(first, second);
console.log(isEqual);//ans:false.....2nd shorte dhora khabe*/



const first = { a: 1, b: 2, c: 2 };
const second = { b: 2, a: 1 };

function compareObjects(obj1, obj2) {
   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
   }
   for (const prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
         return false;
      }
   }
   return true;
}
const isEqual = compareObjects(first, second);
console.log(isEqual);//ans:false.....prothom shorte dhora khabe
