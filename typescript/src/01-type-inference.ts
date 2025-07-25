// [let firstNumber: number]
let firstNumber = 20;

// [const secondNumber: 30]  notice that TypeScript instead of telling us the type of the secondNumber it tells us that
// it's value is 30 which is a number that's because we declare it as CONSTANT (This applies to other types too)
const secondNumber = 30;

// [function sum(a: number, b: number): number] even though we didn't specify the return type of sum it appears that it
// returns a number; because TypeScript automatically detects what the function returns
function sum(a: number, b: number) {
  return a + b;
}

// [function concat(a: number, b: number): string]
function concat(a: number, b: number) {
  return `${a} + ${b}`;
}

// [function concatWithoutReturn(a: number, b: number): void] if we don't return anything then function return type is void
function concatWithoutReturn(a: number, b: number) {
  `${a} + ${b}`;
}

// [const array: number[]] why we didn't get [const array: [1, 2, 3]] even though array was declared as constant, that's
// because we can add/remove elements form the array using array built-in methods (What we can't change is the whole array )
const array = [1, 2, 3];

// we don't have to declare variable type all the time; because TypeScript will automatically infer the type,
// but in sum cases you have to like in functions to let the TypeScript knows what the function should return
