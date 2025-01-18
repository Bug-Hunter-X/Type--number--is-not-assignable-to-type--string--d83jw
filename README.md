# Type 'number' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error: Type 'number' is not assignable to type 'string'.  This error highlights TypeScript's strong typing system and how it prevents runtime errors caused by incorrect data types.

## The Bug

The `combineStrings` function is defined to accept two string arguments and return a string.  However, the code attempts to pass a number (123) as the first argument, leading to a type error.

## The Solution

The solution involves ensuring that the arguments passed to the function match the expected types.  Type checking is crucial in TypeScript and will be your best friend in creating robust applications.  Explicit type casting can also be used, but it requires attention to maintain type safety.