// EXAMPLE 1 - Get the filename without the path using JavaScript

function getFilename(fullPath) {
  return fullPath.replace(/^.*[\\\/]/, '');
}

// 👇️ myFile.png
console.log(getFilename('/my-folder/myFile.png'));

// 👇️ myFile.jpeg
console.log(getFilename('/my-folder/nested/myFile.jpeg'));

// 👇️ myFile.jpeg
console.log(getFilename('myFile.jpeg'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the filename without the path using substring()

// function getFilename(fullPath) {
//   return fullPath.substring(fullPath.lastIndexOf('/') + 1);
// }

// // 👇️ myFile.png
// console.log(getFilename('/my-folder/myFile.png'));

// // 👇️ myFile.jpeg
// console.log(getFilename('/my-folder/nested/myFile.jpeg'));

// // 👇️ myFile.jpeg
// console.log(getFilename('myFile.jpeg'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the filename without the path using path()

// import path from 'path';

// // 👇️ if you use CommonJS syntax
// // const path = require('path');

// function getFilename(fullPath) {
//   return path.basename(fullPath);
// }

// // 👇️ myFile.png
// console.log(getFilename('/my-folder/myFile.png'));

// // 👇️ myFile.jpeg
// console.log(getFilename('/my-folder/nested/myFile.jpeg'));

// // 👇️ myFile.jpeg
// console.log(getFilename('myFile.jpeg'));
