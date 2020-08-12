TypeScript Programming

The ES 6 based programming language
TypeScript Features
The block scope using 'let' keyword, ES 6
Data Types, only in TypeScript
number, for all numeric types
string
boolean
date
Object
any (default type)
Union Types
declaration of variable with more than one data type
The 'rest' parameters ES 6
Mechanism to pass variable number of parameters to a method
syntax
...arg
... is knows as 'spead-operator'
Template String, ES 6
New sysntax for string concatination aka mechanism to build a 'mutable-string'
HTML Parsing for string
syntax
${Expressions}
My name is ${myname}
Here myname is variable
Arrow Operator, ES 6
Lambda Expressions like C#
If a method accepts callback function as input parameter then use arraow operation as input parameter instaed of callback function
Syntax
function myfx(function(x,y){......})
myfx((x,y)=> {......});
Collection methods for Array and String
Array, is defined using [];
Array, the generic array type
Object Oriented Programming, ES 6
Modules, ES 6
Transpilations--> Compilation and then Transformation aka Compiled Transformation
TypeScript will be transpiled into JavaScript (ES 3)
====================================================================================== Installing JavaScript

Install it in Global Scope of Machine
npm install -g typescript
The 'tsc' utility aka CLI, used to transpile the .ts files into .js javascript files
To run the JavaScript
Either create HTML page and refer JavaScript on HTML Page and execute in browser
OR run the JavaScript file on Node.js server
node .js
CReate package.json file, the JavaScript package configuartion file generated using
npm init -y ----------------> command
The 'devDependencies' for development time packages
npm install --save-dev
The 'dependencies' for runtime required packages
npm install --save
====================================================================================== Ex 1: Create string with following value TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.

Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)
Find out the number of occurences of specific word and character in string.
COnvert first character of each word in upper case.
