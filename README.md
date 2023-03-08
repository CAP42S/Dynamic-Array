# Dynamic Array Implementation in JavaScript

## Description

This program implements the array data structure dynamically in JavaScript. This means that the array will grow or shrink automatically as elements are added or removed, respectively. Space will be pre-allocated whenever necessary to push() or unshift() elements, so the program can efficiently handle a large number of elements.

## Features

- Automatically grows or shrinks the array as elements are added or removed
- Efficiently pre-allocates space whenever necessary
- Supports all standard array operations (push, pop, shift, unshift, slice, splice, etc.)

## Installation

To use the program, simply include the dynamic-array.js file in your project.

## Usage

To create a dynamic array, use the following code:

`const myArray = new DynamicArray();`

To add elements to the array, use the `push()` or `unshift()` methods:

- `myArray.push('element1');`
- `myArray.unshift('element2');`

To remove elements from the array, use the pop() or shift() methods:

- `myArray.pop();`
- `myArray.shift();`

To access elements in the array, use standard array indexing:

- `const firstElement = myArray[0];`
- `const lastElement = myArray[myArray.length - 1];`

For a full list of supported operations, see the dynamic-array.js file.

## Contributing

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Submit a pull request.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for more information.
