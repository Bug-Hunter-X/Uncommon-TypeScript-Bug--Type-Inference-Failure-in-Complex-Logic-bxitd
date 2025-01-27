# Uncommon TypeScript Bug: Type Inference Failure

This repository demonstrates an uncommon bug in TypeScript related to type inference failures.  The bug is particularly subtle and may arise in scenarios involving complex logic or function overloads where type inference doesn't correctly align between the function signatures and implementation.

## The Bug

The core issue lies in how TypeScript infers types when dealing with multiple type possibilities in a function and the implementation of that function. If the type inference is not handled carefully, it could lead to unexpected type errors during compilation or unexpected behavior at runtime. This is especially challenging to debug, because it does not follow the traditional patterns of type errors.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` to view the code that exhibits the unexpected type inference. 
3. Try to execute the code using the TypeScript compiler. You will encounter unexpected behavior or type errors.
4. Refer to `bugSolution.ts` for a corrected implementation.