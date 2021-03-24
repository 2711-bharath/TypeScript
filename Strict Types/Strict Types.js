/*
    TypeScript Strict types :
    1. noImplicitAny
    2. noImplicitThis
    3. strictNullChecks
        Check null before returning the data
    4. strictPropertyInitialization
        Mention data types everywhere inside the code
    5. strictBindCallApply
*/
var _this = this;
// noImplicitAny
// non-strict mode
function extractIds(list) {
    // here list implicitly has a type any
    // member is also implicitly has a type any
    return list.map(function (member) { return member.id; });
}
function extractIdsStrict(list) {
    return list.map(function (member) { return member.id; });
}
// noImplicitThis
// non-strict mode
function uppercaseLabel() {
    return this.label.toUpperCase();
}
var demo = {
    label: 'Hello',
    uppercaseLabel: uppercaseLabel
};
// strict mode
var demo1 = {
    label: 'Hello',
    uppercaseLabel: function () {
        return _this.label.toUpperCase();
    }
};
// strictBindCallApply
// strict mode
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum.apply(null, [1, 2, 3]));
