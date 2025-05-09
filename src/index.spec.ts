const { caesarEncrypt, caesarDecrypt } = require('./index');


function assertEqual(actual: string, expected: string, message: string) {
  if (actual !== expected) {
    throw new Error(`FAIL: ${message}\nExpected: "${expected}"\nActual:   "${actual}"`);
  } else {
    console.log(`PASS: ${message}`);
  }
}

// Basic shift test
assertEqual(caesarEncrypt("abc", 1), "bcd", "Shift lowercase by +1");
assertEqual(caesarEncrypt("ABC", 1), "BCD", "Shift uppercase by +1");

// Wrap-around test
assertEqual(caesarEncrypt("xyz", 3), "abc", "Wrap around end of lowercase");
assertEqual(caesarEncrypt("XYZ", 3), "ABC", "Wrap around end of uppercase");

// Decryption reverses encryption
const msg = "The quick brown fox jumps over the lazy dog!";
const shift = 5;
const encrypted = caesarEncrypt(msg, shift);
const decrypted = caesarDecrypt(encrypted, shift);
assertEqual(decrypted, msg, "Decrypt reverses encrypt");

// Negative shift
assertEqual(caesarEncrypt("bcd", -1), "abc", "Negative shift works");

// Non-alphabetic characters
assertEqual(caesarEncrypt("Hello, World!", 3), "Khoor, Zruog!", "Preserves punctuation and spaces");

