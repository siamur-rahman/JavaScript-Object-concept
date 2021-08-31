const bottle = {
   color: 'yellow',
   hold: 'water',
   price: 50,
   isClean: true
};
console.log(bottle);
// getting all propertis name 
const key = Object.keys(bottle);
// console.log(key)

//getting all values
const values = Object.values(bottle);
// console.log(values);

//getting key value pairs/antities
const pairs = Object.entries(bottle);
console.log(pairs);

/*
delete bottle.isClean;
console.log(bottle);

Object.seal(bottle);//seal kore dile delete kora zaina zug kora zaina shudhu property change kora zai

delete bottle.isClean;
console.log(bottle);*/

/*
Object.seal(bottle);
bottle.price = 100;//price change hoye zabe
bottle.height = 16;//height name er property nai tai eta zug hobe na
console.log(bottle);*/

Object.freeze(bottle);
bottle.price = 100;//price change hobe na 
bottle.height = 16;//height name er property nai tai etao zug hobe na
console.log(bottle);


