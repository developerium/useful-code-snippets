// js#24 Array initialization

// This will make an array with length of 3
const list1 = new Array(3);
// list1 -> [empty,empty,empty]

// But if you pass more than one parameter,
// it will make an array with those parameters
// and will lead to confusion and bugs!
const list2 = new Array(3, 2);
// list2 -> [3, 2]

// This is much simpler
const list3 = [];

// This will lead to no confusion to what it contains
const list4 = [1, 2];

// But there is a case when using
// Array constructor is useful, when you want
// an array with predefined length and you
// want to fill it with some default value
const list5 = new Array(3).fill(0);
// list5 -> [0, 0, 0]
