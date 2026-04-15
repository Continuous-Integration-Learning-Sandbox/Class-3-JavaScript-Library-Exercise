# @armand-veress/string-toolkit

A small, useful JavaScript library for password utility functions.

## Context
This project was developed as part of a Continuous Integration course exercise. 

## Installation

Install using npm:
```bash
npm install @armand-veress/password-utilities
```

Or using yarn:
```bash
yarn add @armand-veress/password-utilities
```

## Usage

* generateStrongPassword => generates a strong password with n characters
```JavaScript
generateStrongPassword(12) // a 12 character string; ex. "pC%mD8TpCKn2"
```
* isStrongPassword => evaluates the strength of a password (strong/weak)
```JavaScript
isStrongPassword("pC%mD8TpCKn2") // true
isStrongPassword("password") // false
```

## Development
To run tests:
```bash
npm test
```
