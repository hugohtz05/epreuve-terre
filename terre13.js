function is24to12() {
  const argument = process.argv[2];

  let hour = argument.slice(0, 2);
  const minutes = argument.slice(3, 5);
  const ispm = argument.slice(-2);

  if (ispm === "pm" && hour < 12) {
    hour = String(Number(hour) + 12);
  }

  console.log(hour + ":" + minutes);
}

is24to12();
