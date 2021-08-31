

/*
for(let i=0; i<10; i++){}
for (const num of numbers){}//array
for (const prop in student){}//object

*/
const bottle = { color: 'yellow', hold: 'water', price: 50, isClean: true };
// //ekhane bottle ta object tai for in loop chalanu zabe
// for (const prop in bottle) {
//    // console.log(bottle, prop, bottle['color']);

//    console.log(bottle, prop, bottle[prop]);
// }

// //advanced..........
// const keys = Object.keys(bottle);//object.keys diye bottle er key gula pabo

// console.log(keys);//ekhane keys ekta array tai for of loop chalanu zabe...


// /* for (const prop of keys) {
//    console.log(prop, bottle[prop]);
// }*/




const entries = Object.entries(bottle);
console.log(entries);// entries jurai jurai man ekta array er moddhe dei sei man gulao r ekta array er moddhe thake

const [key, value] = ['color', 'yellow'];//array distructuring prothom ta dibe prothom ta 2nd ta second
console.log(key, value);

for (const [key, value] of Object.entries(bottle)) {
   console.log(key, value);//array er vitrer array theke ekta array pamu(object.entries diye) tarpor seta theke distructuring korlam
   //array tai for of loop chalaite hobe
}



const arr = ['color', 'jeans', 'tom']

console.log(arr['color']);//undefined
console.log(arr[0])//color

