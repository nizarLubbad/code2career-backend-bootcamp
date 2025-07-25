// what we put after the colon called (type annotation) which represents the type of the variable, function, ...
let number: number = 99;

function add(a: number, b: number): number {
  return a + b;
}

const numberArray: number[] = [10, 20, 30];
const stringArray: string[] = ["A", "B", "C"];

// if you want the array to accept multiple types groping them with parentheses is necessary,
// without it the type will be different
// in general this declaration is NOT RECOMMENDED, declare each array separately would be a better approach
const numberAndStringArray: (number | string)[] = ["A", "B", "C", 10, 20, 30];

const genericNumberArray: Array<number> = [100, 200, 300]; // < .. >  -> Generic

// it's not necessary to define type annotation whenever you can, in some cases you can skip declaring it; because
// TypeScript will know the type through (type inference) and provide (type annotation) under the hood depending on the values
