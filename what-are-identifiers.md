# What are Identifiers?

In JavaScript, identifiers are the labels that we put on variables, functions, and properties. They are considered pieces of code and have rules for the characters they can contain.

The rules for JavaScript identifiers are:

- They're case-sensitive, which means that `let foo = 'bar'` is not the same as `let Foo = 'bar'`, so they will be treated as two seperate variable declarations.

- They can contain Unicode letters, `$`, `_`, and digits (0-9), but may not start with a digit. We cannot declare `let 1person = 'Danny'` because JavaScript will interpret the first characters as an actual number value. Declaring any identifier with a number as the first character will throw `SyntaxError: Invalid or unexpected token`.

However, these rules don't apply to the values that identifiers can store. JavaScript doesn't care if you declare a variable and assign to it a string with the first character being a digit because the digit is part of the string. This means we can say `const password = '111oxford'` and JavaScript will interpret the value entirely as a string.
