function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number = 8
let result2 = subtract(10, 4); // result2: number = 6

//Uncommon bug: Type inference might fail unexpectedly with complex logic or overloaded functions
function process(value: number | string): number | string {
  if (typeof value === 'number') {
    return value * 2; //Correct Type inference
  } else if (typeof value === 'string') {
    return value.toUpperCase(); //Correct Type Inference
  }
  return value;
}

let result3 = process(5);
let result4 = process("hello");

//Unexpected Behavior with Overloads:
function overloadedFunc(value: number): number; //Overload signature 1
function overloadedFunc(value: string): string; // Overload signature 2
function overloadedFunc(value: number | string): number | string { //Implementation signature
  if (typeof value === 'number') {
    return value * 2; 
  } else if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}

let result5 = overloadedFunc(10);
let result6 = overloadedFunc("world");
//Uncommon bug: Type inference could fail if the logic in the implementation doesn't align perfectly with all overload signatures leading to unexpected type errors or runtime issues if not properly handled.