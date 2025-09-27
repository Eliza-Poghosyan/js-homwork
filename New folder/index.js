

// 1)
let person = { name:"Eliza", age:17, city:"Yerevan", "isStudent":true }
delete person.city
alert ('age' in person);  //true

//2)
function deleteUnd (obj) {
    for (let key in obj) {
        if (obj[key]===undefined) {
            delete obj[key]; } 
        }
    return obj; 
}
let obj = {
	key1: "hello",
	key2: undefined,
	key3: 123,
	key4: undefined
};
console.log(deleteUnd(obj)); // AYOOO EXAV 




