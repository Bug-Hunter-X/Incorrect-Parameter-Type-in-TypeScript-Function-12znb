function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the array element
console.log(greeter(user[0])); // Hello, Jane

// Solution 2: Modify the function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); // Hello, Jane Doe

// Solution 3: Type assertion (use with caution)
console.log(greeter(user as unknown as string));//This will compile but may lead to unexpected results if user does not satisfy string type