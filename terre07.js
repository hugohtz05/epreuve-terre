function reverse () {
  let argument = process.argv[2]
  let result = ""
  for(let i = argument.length -1; i >= 0; i--){
    result += argument[i];   
  }
  console.log(result)
}
reverse()