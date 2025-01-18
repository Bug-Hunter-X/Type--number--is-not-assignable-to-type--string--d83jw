function combineStrings(str1: string, str2: string): string {
  return str1 + str2;
}

let combined = combineStrings("123", "456"); // Correct: Both arguments are strings

// Or with type assertion if needed:
let combined2 = combineStrings(String(123), "456");