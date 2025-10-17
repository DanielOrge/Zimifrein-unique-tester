// This file intentionally contains many issues for Codacy analysis

var foo = "bar"
function test(x, y) {
    if(x = y) { // assignment instead of comparison
        console.log("Equal")
    }
    for(var i=0;i<10;i++) {
        setTimeout(function() {
            console.log(i) // closure issue, always prints 10
        }, 100)
    }
    undeclaredVar = 5 // using undeclared variable
    return x + y
}

test(1) // missing argument

// Unused variable
let unused = 123

// Bad indentation
    function badIndent() {
console.log("bad indent")
    }

// Unreachable code
function unreachable() {
    return true
    console.log("This will never run")
}

// Deprecated API
document.write("deprecated")

// == instead of ===
if (foo == null) {
    console.log("foo is null or undefined")
}

// Extra semicolons
;;;

// Trailing spaces      
