const argument = process.argv[2] 

let completHour = argument;

let hourMinute = completHour.split(":");

let hour = hourMinute[0];
let minute = hourMinute[1];

if (hour > 12) {
   hour = hour - 12
  console.log(hour + ":" + minute)
}else {
  console.log(hour + ":" + minute)
}
