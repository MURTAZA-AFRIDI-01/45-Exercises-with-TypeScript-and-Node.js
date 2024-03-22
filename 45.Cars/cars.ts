import { features } from "process";

// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer:string,modelName:string,...extraoption: { [key :string] : any }[]   ):
Object {
    const carinfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
        
 
    }
    return carinfo;
};

 let answer = storeCarInfo('Bugatti','Bugatti Divo',{color : 'black'},{features:['exhaust pipes','NACA duct ON ROOF']})
console.log(answer);