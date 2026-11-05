function greet(name) {
  return `Hello, ${name}!`;
}

module.greet = greet;

if (require.main === module) {
  console.log(greet(name));
}
