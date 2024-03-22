//       () parentheses
//              [] square bracket
//                      {}  curly braces
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and 
let alienColors :string = "green";
// write an if-else chain.
// If the alien’s color is green
// print a statement that the player just earned 5 points for shooting the alien.
// • Write one version of this program that runs the if block.
if(alienColors === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the else block.
alienColors = "yellow"

if(alienColors === "green"){
    console.log("player just earned 5 points for shooting the alien.");
}else{
    console.log("player just earned 10 points.");
}
