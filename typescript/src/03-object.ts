// Object (with big 'O'), object (with small 'o'), and {}
// everything in JavaScript can be an object through a process called (boxing)

(3.14).toString(); //JavaScript will convert 3.14 to an object then call the toString method on it

// the object type (with small 'o') accepts ONLY non-primitives values
// avoid using the object type; because you need to handel many cases
function handleObject(obj: object) {
  if (Array.isArray(obj)) {
    // operations on Arrays
  } else if (typeof obj === "function") {
    // operations on functions
  }
}

handleObject([]);
handleObject({});
handleObject(() => {});

// const obj1: object = 10; // error
// const obj1: object = "string will give an error"; // error

const obj2: {} = "nizar lubbad"; // accept any value primitive/non-primitive EXCEPT null & undefined (Rarely used)

const obj3: Object = new Map(); // similar to {}

// you don't have to specify the Object type; because it accepts almost anything
let obj4: Object = { firstName: "nizar", secondName: "lubbad" };
obj4 = [1, 2, 3];
obj4 = "Gaza";
obj4 = () => {
  console.log("Hello, World!");
};
