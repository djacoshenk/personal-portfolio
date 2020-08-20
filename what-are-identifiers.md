# What are Identifiers?

In JavaScript, identifiers are the labels that we put on variables, functions, and properties. They are considered pieces of code and have rules for the characters they can contain.

The rules for JavaScript identifiers are:

- They're case-sensitive, which means that `const foo = 'bar'` is not the same as `const Foo = 'bar'`, so they will be treated as two seperate variable declarations.

- They can contain Unicode letters, `$`, `_`, and digits (0-9), but may not start with a digit. We cannot declare `const 1foo = 'bar'` because JavaScript will try to interpret the first characters as an actual number value. Declaring any identifier with a number as the first character will throw `SyntaxError: Invalid or unexpected token`.

However, these rules don't apply to the values that identifiers can store. JavaScript doesn't care if you declare a variable and assign to it a string with the first character being a number because numbers can be represented as strings. This means we can say `const foo = '123bar'` since the value is considered `typeof string`.

This only works if the value is entirely of a single type. Mixing value types together doesn't work, unless they can be represented as that type like in the previous example. For instance, `const foo = 123bar` will also throw `SyntaxError: Invalid or unexpected token` because JavaScript will interpret the number characters `123` as `typeof number`, but then `bar` will appear to be part of the code. In JavaScript, we can't represent string characters `bar` as numbers, but we can represent numbers `123` as string characters.
