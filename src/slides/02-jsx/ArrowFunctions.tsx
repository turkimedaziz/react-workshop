// Slide: "Arrow functions"
// Step by step: from a traditional function to the shortest arrow function.

// Traditional anonymous function
const traditional = function (a: number) {
  return a + 100
}

// 1. Remove the word "function" and place an arrow between the argument and the body
const step1 = (a: number) => {
  return a + 100
}

// 2. Remove the braces and the word "return": the return is implied
const step2 = (a: number) => a + 100

// 3. Remove the parameter parentheses (only with ONE parameter)
// In TypeScript, a parameter with a type annotation needs its parentheses,
// so here the type is given to the variable instead:
const step3: (a: number) => number = (a) => a + 100 // in plain JavaScript: a => a + 100

// Several parameters or no parameter: parentheses are required
const add = (a: number, b: number) => a + b
const sayHi = () => 'Hi!'

const ArrowFunctions = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">traditional(1) = {traditional(1)}</li>
      <li className="list-group-item">step1(1) = {step1(1)}</li>
      <li className="list-group-item">step2(1) = {step2(1)}</li>
      <li className="list-group-item">step3(1) = {step3(1)}</li>
      <li className="list-group-item">add(2, 3) = {add(2, 3)}</li>
      <li className="list-group-item">sayHi() = {sayHi()}</li>
    </ul>
  )
}

export default ArrowFunctions
