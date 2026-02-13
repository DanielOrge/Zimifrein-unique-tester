
// ESLint violations file - 400 issues with ESLint 8.57 recommended rules

// ===== no-var violations (40 issues) =====
var x1 = 1;
var x2 = 2;
var x3 = 3;
var x4 = 4;
var x5 = 5;
var x6 = 6;
var x7 = 7;
var x8 = 8;
var x9 = 9;
var x10 = 10;
var y1 = 1;
var y2 = 2;
var y3 = 3;
var y4 = 4;
var y5 = 5;
var y6 = 6;
var y7 = 7;
var y8 = 8;
var y9 = 9;
var y10 = 10;
var z1 = 1;
var z2 = 2;
var z3 = 3;
var z4 = 4;
var z5 = 5;
var z6 = 6;
var z7 = 7;
var z8 = 8;
var z9 = 9;
var z10 = 10;
var a1 = 1;
var a2 = 2;
var a3 = 3;
var a4 = 4;
var a5 = 5;
var a6 = 6;
var a7 = 7;
var a8 = 8;
var a9 = 9;
var a10 = 10;

// ===== no-unused-vars violations (60 issues) =====
let unused1 = 1;
let unused2 = 2;
let unused3 = 3;
let unused4 = 4;
let unused5 = 5;
let unused6 = 6;
let unused7 = 7;
let unused8 = 8;
let unused9 = 9;
let unused10 = 10;
let unused11 = 11;
let unused12 = 12;
let unused13 = 13;
let unused14 = 14;
let unused15 = 15;
let unused16 = 16;
let unused17 = 17;
let unused18 = 18;
let unused19 = 19;
let unused20 = 20;
let unused21 = 21;
let unused22 = 22;
let unused23 = 23;
let unused24 = 24;
let unused25 = 25;
let unused26 = 26;
let unused27 = 27;
let unused28 = 28;
let unused29 = 29;
let unused30 = 30;
function testFunc1(param1, param2, param3) {}
function testFunc2(a, b, c) {}
function testFunc3(x, y, z) {}
function testFunc4(p1, p2, p3) {}
function testFunc5(q1, q2, q3) {}
const obj1 = { key1: 1, key2: 2, key3: 3 };
const obj2 = { key4: 4, key5: 5, key6: 6 };
const obj3 = { key7: 7, key8: 8, key9: 9 };
const unused31 = 31;
const unused32 = 32;
const unused33 = 33;
const unused34 = 34;
const unused35 = 35;
const unused36 = 36;
const unused37 = 37;
const unused38 = 38;
const unused39 = 39;
const unused40 = 40;

// ===== no-undef violations (30 issues) =====
console.log(undefinedVar1);
console.log(undefinedVar2);
console.log(undefinedVar3);
console.log(undefinedVar4);
console.log(undefinedVar5);
console.log(undefinedVar6);
console.log(undefinedVar7);
console.log(undefinedVar8);
console.log(undefinedVar9);
console.log(undefinedVar10);
console.log(missingVar1);
console.log(missingVar2);
console.log(missingVar3);
console.log(missingVar4);
console.log(missingVar5);
console.log(missingVar6);
console.log(missingVar7);
console.log(missingVar8);
console.log(missingVar9);
console.log(missingVar10);
const val1 = unknownRef1;
const val2 = unknownRef2;
const val3 = unknownRef3;
const val4 = unknownRef4;
const val5 = unknownRef5;
const val6 = unknownRef6;
const val7 = unknownRef7;
const val8 = unknownRef8;
const val9 = unknownRef9;
const val10 = unknownRef10;

// ===== no-redeclare violations (30 issues) =====
let redeclare1 = 1;
let redeclare1 = 2;
let redeclare2 = 1;
let redeclare2 = 2;
let redeclare3 = 1;
let redeclare3 = 2;
let redeclare4 = 1;
let redeclare4 = 2;
let redeclare5 = 1;
let redeclare5 = 2;
function dup1() {}
function dup1() {}
function dup2() {}
function dup2() {}
function dup3() {}
function dup3() {}
function dup4() {}
function dup4() {}
function dup5() {}
function dup5() {}
const const1 = 1;
const const1 = 2;
const const2 = 1;
const const2 = 2;
const const3 = 1;
const const3 = 2;
const const4 = 1;
const const4 = 2;
const const5 = 1;
const const5 = 2;

// ===== no-constant-condition violations (40 issues) =====
if (true) { let x = 1; }
if (false) { let x = 1; }
if (1) { let x = 1; }
if (0) { let x = 1; }
if ("string") { let x = 1; }
if ("") { let x = 1; }
while (true) { break; }
while (false) { let x = 1; }
while (1) { break; }
while (0) { let x = 1; }
do { let x = 1; } while (true);
do { let x = 1; } while (false);
do { let x = 1; } while (1);
do { let x = 1; } while (0);
if (true) { } else { let y = 1; }
if (false) { } else { let y = 1; }
if (1) { } else { let y = 1; }
if (0) { } else { let y = 1; }
for (; true;) { break; }
for (; false;) { let z = 1; }
for (; 1;) { break; }
for (; 0;) { let z = 1; }
if (null) { let x = 1; }
if (undefined) { let x = 1; }
if (NaN) { let x = 1; }
if (true) { } else if (false) { let x = 1; }
while (true) { }
do { } while (true);
if (1 > 0) { let x = 1; }
if (2 < 1) { let x = 1; }
if (3 === 3) { let x = 1; }
if (4 !== 4) { let x = 1; }
if ("a" === "a") { let x = 1; }
if ("b" === "c") { let x = 1; }
if (!true) { let x = 1; }
if (!false) { let x = 1; }
if (Boolean(true)) { let x = 1; }
if (Boolean(false)) { let x = 1; }
const cond1 = true ? 1 : 2;
const cond2 = false ? 1 : 2;

// ===== no-empty violations (30 issues) =====
if (true) { }
if (false) { }
for (let i = 0; i < 1; i++) { }
for (let j = 0; j < 1; j++) { }
for (let k = 0; k < 1; k++) { }
while (true) { break; }
while (false) { }
do { } while (false);
function empty1() { }
function empty2() { }
function empty3() { }
try { } catch (e) { }
try { } catch (e) { } finally { }
try { } finally { }
switch (1) { case 1: break; default: }
switch (2) { case 2: break; default: }
switch (3) { case 3: break; default: }
class Empty1 { }
class Empty2 { }
class Empty3 { }
if (true) { } else { }
if (false) { } else { }
for (;;) { break; }
try { let x = 1; } catch (e) { }
try { let x = 1; } catch (e) { } finally { }
while (true) { break; }
do { } while (true);
if (x > 5) { }
if (y < 3) { }
for (let m = 0; m < 2; m++) { }

// ===== no-extra-semi violations (40 issues) =====
let s1 = 1;;
let s2 = 2;;
let s3 = 3;;
let s4 = 4;;
let s5 = 5;;
let s6 = 6;;
let s7 = 7;;
let s8 = 8;;
let s9 = 9;;
let s10 = 10;;
function f1() {};;
function f2() {};;
function f3() {};;
function f4() {};;
function f5() {};;
if (true) { let x = 1; };;
if (false) { let x = 1; };;
while (true) { break; };;
for (let i = 0; i < 1; i++) { };;
class C1 {};;
class C2 {};;
const obj4 = {};;
const obj5 = {};;
const arr1 = [];;
const arr2 = [];;
let s11 = 11;;
let s12 = 12;;
let s13 = 13;;
let s14 = 14;;
let s15 = 15;;
let s16 = 16;;
let s17 = 17;;
let s18 = 18;;
let s19 = 19;;
let s20 = 20;;
let s21 = 21;;
let s22 = 22;;
let s23 = 23;;
let s24 = 24;;

// ===== no-fallthrough violations (20 issues) =====
switch (1) {
  case 1:
    let a = 1;
  case 2:
    break;
}
switch (2) {
  case 1:
    let b = 2;
  case 2:
    break;
}
switch (3) {
  case 1:
    let c = 3;
  case 2:
    break;
}
switch (4) {
  case 1:
    let d = 4;
  case 2:
    break;
}
switch (5) {
  case 1:
    let e = 5;
  case 2:
    break;
}
switch (6) {
  case 1:
    let f = 6;
  case 2:
    break;
}
switch (7) {
  case 1:
    let g = 7;
  case 2:
    break;
}
switch (8) {
  case 1:
    let h = 8;
  case 2:
    break;
}
switch (9) {
  case 1:
    let i = 9;
  case 2:
    break;
}
switch (10) {
  case 1:
    let j = 10;
  case 2:
    break;
}

// ===== no-unreachable violations (30 issues) =====
function unreachable1() {
  return 1;
  let x = 1;
}
function unreachable2() {
  return 2;
  let y = 2;
}
function unreachable3() {
  return 3;
  let z = 3;
}
function unreachable4() {
  throw new Error("error");
  let a = 4;
}
function unreachable5() {
  throw new Error("error");
  let b = 5;
}
function unreachable6() {
  return "string";
  console.log("unreachable");
}
function unreachable7() {
  return "string";
  console.log("unreachable");
}
function unreachable8() {
  return "string";
  console.log("unreachable");
}
function unreachable9() {
  return "string";
  console.log("unreachable");
}
function unreachable10() {
  return "string";
  console.log("unreachable");
}
if (true) {
  let x = 1;
} else {
  let y = 2;
  let z = 3;
}
if (false) {
  let a = 1;
  let b = 2;
} else {
  let c = 3;
}
while (true) {
  let m = 1;
  break;
  let n = 2;
}
do {
  let p = 1;
} while (false);
let q = 2;
for (let i = 0; i < 1; i++) {
  return "value";
  let s = 3;
}
switch (1) {
  case 1:
    return "one";
    let t = 4;
}
if (1) {
  throw new Error("msg");
  let u = 5;
}

// ===== no-unsafe-negation violations (20 issues) =====
if (!1 in obj4) { }
if (!2 in obj5) { }
if (!"test" in obj4) { }
if (!true in obj5) { }
if (!false in obj4) { }
if (![1, 2] instanceof Array) { }
if (![1, 2, 3] instanceof Array) { }
const neg1 = !1 in { a: 1 };
const neg2 = !2 in { b: 2 };
const neg3 = !"x" in { c: 3 };
const neg4 = !true in { d: 4 };
const neg5 = !false in { e: 5 };
const neg6 = ![1] instanceof Array;
const neg7 = ![2] instanceof Array;
const neg8 = ![3] instanceof Array;
const neg9 = ![4] instanceof Array;
const neg10 = ![5] instanceof Array;
const neg11 = !obj4 in obj5;
const neg12 = !obj5 in obj4;
const neg13 = ![1, 2, 3] instanceof Object;
const neg14 = !{ key: "value" } in obj4;

// ===== use-isnan violations (30 issues) =====
if (NaN === NaN) { }
if (NaN !== NaN) { }
if (NaN == NaN) { }
if (NaN != NaN) { }
const isNan1 = NaN === NaN;
const isNan2 = NaN !== NaN;
const isNan3 = NaN == NaN;
const isNan4 = NaN != NaN;
const isNan5 = NaN === NaN;
const isNan6 = NaN !== NaN;
const isNan7 = NaN == NaN;
const isNan8 = NaN != NaN;
const isNan9 = NaN === NaN;
const isNan10 = NaN !== NaN;
let result1 = NaN === NaN;
let result2 = NaN !== NaN;
let result3 = NaN == NaN;
let result4 = NaN != NaN;
if (1 / 0 === NaN) { }
if (0 / 0 === NaN) { }
const isNan11 = 0 / 0 === NaN;
const isNan12 = 1 / 0 === NaN;
const isNan13 = Math.sqrt(-1) === NaN;
const isNan14 = Math.sqrt(-2) === NaN;
const isNan15 = Math.sqrt(-3) === NaN;
const isNan16 = parseInt("abc") === NaN;
const isNan17 = parseFloat("xyz") === NaN;
const isNan18 = Number("invalid") === NaN;
const isNan19 = NaN === 0 / 0;
const isNan20 = NaN === 1 / 0;

// ===== valid-typeof violations (30 issues) =====
if (typeof x === "strnig") { }
if (typeof y === "nubmer") { }
if (typeof z === "booleam") { }
if (typeof a === "strng") { }
if (typeof b === "numbr") { }
if (typeof c === "boolena") { }
if (typeof d === "functoin") { }
if (typeof e === "objet") { }
if (typeof f === "undifined") { }
if (typeof g === "symbo") { }
const typeof1 = typeof h === "strnig";
const typeof2 = typeof i === "nubmer";
const typeof3 = typeof j === "booleam";
const typeof4 = typeof k === "strng";
const typeof5 = typeof l === "numbr";
const typeof6 = typeof m === "boolena";
const typeof7 = typeof n === "functoin";
const typeof8 = typeof o === "objet";
const typeof9 = typeof p === "undifined";
const typeof10 = typeof q === "symbo";
let type1 = typeof r === "strnig";
let type2 = typeof s === "nubmer";
let type3 = typeof t === "booleam";
let type4 = typeof u === "strng";
let type5 = typeof v === "numbr";
let type6 = typeof w === "boolena";
let type7 = typeof x === "functoin";
let type8 = typeof y === "objet";
let type9 = typeof z === "undifined";
let type10 = typeof aa === "symbo";

// ===== no-prototype-builtins violations (20 issues) =====
const has1 = obj4.hasOwnProperty("key");
const has2 = obj5.hasOwnProperty("key");
const has3 = obj4.propertyIsEnumerable("key");
const has4 = obj5.propertyIsEnumerable("key");
const has5 = obj4.isPrototypeOf(obj5);
const has6 = obj5.isPrototypeOf(obj4);
const has7 = obj4.hasOwnProperty("x");
const has8 = obj5.hasOwnProperty("y");
const has9 = obj4.hasOwnProperty("z");
const has10 = obj5.hasOwnProperty("w");
const has11 = obj4.propertyIsEnumerable("a");
const has12 = obj5.propertyIsEnumerable("b");
const has13 = obj4.propertyIsEnumerable("c");
const has14 = obj5.propertyIsEnumerable("d");
const has15 = obj4.isPrototypeOf(obj5);
const has16 = obj5.isPrototypeOf(obj4);
const has17 = obj4.isPrototypeOf(obj5);
const has18 = obj5.isPrototypeOf(obj4);
if (obj4.hasOwnProperty("key")) { }
if (obj5.hasOwnProperty("key")) { }

// ===== no-obj-calls violations (10 issues) =====
const call1 = Math();
const call2 = JSON();
const call3 = Reflect();
const call4 = Atomics();
const call5 = Symbol();
const call6 = Math();
const call7 = JSON();
const call8 = Reflect();
const call9 = Atomics();
const call10 = Symbol();

// ===== no-unexpected-multiline violations (10 issues) =====
const multi1 = 1
[2, 3];
const multi2 = 2
[3, 4];
const multi3 = 3
["a"];
const multi4 = 4
["b"];
const multi5 = 5
["c"];
const multi6 = "string"
["key"];
const multi7 = "value"
["key"];
const multi8 = obj4
["prop"];
const multi9 = obj5
["prop"];
const multi10 = 10
[1];

// ===== no-import-assign violations (5 issues) =====
import * as ns from "./module.js";
ns.a = 1;
ns.b = 2;
ns.c = 3;
ns.d = 4;

// ===== no-regex-spaces violations (10 issues) =====
const regex1 = /foo  bar/;
const regex2 = /hello   world/;
const regex3 = /test    value/;
const regex4 = /a    b/;
const regex5 = /x     y/;
const regex6 = /one   two/;
const regex7 = /three   four/;
const regex8 = /five   six/;
const regex9 = /seven   eight/;
const regex10 = /nine   ten/;

// ===== no-sparse-arrays violations (10 issues) =====
const sparse1 = [1, , 3];
const sparse2 = [4, , 6];
const sparse3 = [7, , 9];
const sparse4 = [10, , 12];
const sparse5 = [13, , 15];
const sparse6 = [1, 2, , 4];
const sparse7 = [5, 6, , 8];
const sparse8 = [9, 10, , 12];
const sparse9 = [13, 14, , 16];
const sparse10 = [17, 18, , 20];

// ===== no-unsafe-finally violations (10 issues) =====
try {
  let x = 1;
} finally {
  return 1;
}
try {
  let y = 2;
} finally {
  return 2;
}
try {
  let z = 3;
} finally {
  return 3;
}
try {
  let a = 4;
} finally {
  return 4;
}
try {
  let b = 5;
} finally {
  return 5;
}
try {
  let c = 6;
} finally {
  throw new Error("error");
}
try {
  let d = 7;
} finally {
  throw new Error("error");
}
try {
  let e = 8;
} finally {
  throw new Error("error");
}
try {
  let f = 9;
} finally {
  throw new Error("error");
}
try {
  let g = 10;
} finally {
  throw new Error("error");
}
