"use strict";

let a = "xx";
for (var i = 0;i < 3;i++) {
    setTimeout(function () {
        console.log(i);
    });
}
//cho - 稳定版  开发班。 测试版 。  -- 一个不如一个不稳定。。
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    });
}

console.log(a);