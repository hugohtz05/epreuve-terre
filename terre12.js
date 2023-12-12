const argument = process.argv[2] 

let comlpetHour = argument;

let hourMinute = comlpetHour.split(":");

let hour = hourMinute[0];
let minute = hourMinute[1];

if (hour > 12) {
   hour = hour - 12
  console.log(hour + ":" + minute + "pm")
}else {
  console.log(hour + ":" + minute + "am")
}
