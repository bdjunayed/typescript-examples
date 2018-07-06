"use strict";
var Foo;
(function (Foo) {
    Foo[Foo["A"] = 1] = "A";
    Foo[Foo["B"] = 2] = "B";
})(Foo || (Foo = {}));
console.log(1 /* A */, Foo.B);
