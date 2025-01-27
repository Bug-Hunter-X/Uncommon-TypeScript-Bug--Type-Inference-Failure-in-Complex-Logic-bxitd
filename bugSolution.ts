function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number = 8
let result2 = subtract(10, 4); // result2: number = 6

//Improved Type Handling
function process(value: number | string): number | string {
  if (typeof value === 'number') {
    return value * 2; 
  } else if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value; //Handle other cases to avoid unexpected behavior
  }
}

let result3 = process(5);
let result4 = process("hello");

//Improved Overload Handling:
function overloadedFunc(value: number): number;
function overloadedFunc(value: string): string;
function overloadedFunc(value: number | string): number | string {
  if (typeof value === 'number') {
    return value * 2; 
  } else if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value; //Handle other cases explicitly
  }
}

let result5 = overloadedFunc(10);
let result6 = overloadedFunc("world");