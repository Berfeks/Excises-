let age = 5;
let pulseAtRest = 90;
let intensity = 75;


let pulseAtWorkout = Math.round((220- age - pulseAtRest)*intensity/100 + pulseAtRest)
console.log(Math.round(pulseAtWorkout))
pulseAtRest
intensity