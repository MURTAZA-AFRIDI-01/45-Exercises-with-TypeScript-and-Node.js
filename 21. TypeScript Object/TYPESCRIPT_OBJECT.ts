// Write a program that creates Objects containing these items.
// data type of person object
interface person {
    age : number,
    name : string, 
    nationality : string,
    student : boolean
}
// person object
let person:person = {
    age : 15,
    name : 'murtaza',
    nationality : 'pakistani',
    student : true
}
//print person
console.log(person);
//data type of lamborghini object
interface Lamborghini {
     founder :string,
     name :string,
     color :string,
     model :(string | number)
     automatic : boolean
}
//car object
let Lamborghini :Lamborghini = {
    founder : 'Ferruccio Lamborghini',
    name : 'Lamborghini Aventador',
    color :'black',
    model : 'LP 700-4 Roadster',
    automatic : true
}
//print car
console.log(Lamborghini);