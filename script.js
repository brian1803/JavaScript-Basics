
let name = prompt("Hi, Whats your name?");
let job = prompt(" Hi, " +name "! " "What do you do?");

let answer = prompt("Interesting! Do you love being a" +job "?");

if ( answer= yes ) {
    console.log( +name " is a " +job " and loves it!".toUpperCase);
} else ( answer= no ) {
    console.log( +name " is a " +job " and doesnt like it!".toUpperCase);
}

 /* practice2 */

 let name = prompt("Hi, whats your name?")

 let color = ["Red", "Green", "Yellow"];
 let answer2 = prompt("You choose " +color)

 let fullstatemnet = prompt(+name " chose the color " +color)

 /*practice3 */

if (number >5) {
console.log("Tiny")
} else if (number <10){
  console.log("small")
} else if (number <15){
  console.log("medium")
} else if (number <20){
  console.log("large")
} else (number =20){
  console.log("huge")

}

/* practice 4 */

 let name = prompt("Hi, whats your name?")

 let payrate = prompt("Whats your payrate?")

 let hrsperweek = prompt("How many hours do you work per week?")

 if (number >40) {
console.log(+name "worked a total of " +hrsperweek " receiving a pay of " payrate-40*1.5+payrate*hrsperweek)
} else if (number <=40){
  console.log(+name "worked a total of " +hrsperweek " receiving a pay of " payrate*hrsperweek)
