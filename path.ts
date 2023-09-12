// const path = require("path")
import path from "path"
// const path = require('node:path');


// const getExt = path.extname(
//    " C:\\Users\\Edwin\\OneDrive\\Documents\\JAVASCRIPT\\assignment.ts"
// );
// console.log(getExt);

// console.log(
//     path.basename(
//         "C:\\Users\\Edwin\\OneDrive\\Documents\\JAVASCRIPT\\assignment.ht"
//     )gg
// );
// console.log(
//     path.dirname(
//         "C:\\Users\\Edwin\\OneDrive\\Documents\\JAVASCRIPT\\assignment.ht"
//     )
// );


// The path.format() method returns a path string from an object. This is the opposite of path.parse().

// When providing properties to the pathObject remember that there are combinations where one property has priority over another:

// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists
// console.log(
//     path.format({
//         root: "\ignored",
//         dir: "\\user\Edwin\OneDrive",
//         base: "bens.ts"
//     }
//     )
// );


// The path.isAbsolute() method determines if path is an absolute path.

// If the given path is a zero-length string, false will be returned


// console.log(
//     path.isAbsolute("\\\\ignored"),
//     path.isAbsolute("\\user\Edwin\OneDrive")
// );


// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

// Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.


// console.log(
//     path.join("/fod", "gas", "boy", "girl")
// );


// The path.normalize() method normalizes the given path, resolving '..' and '.' segments.

console.log(
    path.normalize("C:\\fod\\\\gas\\boy\\girl..\\")
);


/**assignment
 * format
 * join
 * normalize
 * parse
 * posix
 * isAbsolute
 * delimeter
 * toNamespacedPath
 * resolve */ 