let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function alphabet() {
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    result += letters[i];
  }
  console.log(result);
}

alphabet();
