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

// noImplicitAny

// non-strict mode
function extractIds (list) {
    // here list implicitly has a type any

    // member is also implicitly has a type any
    return list.map(member => member.id)
}

// strict mode
interface Member {
    id: number
    name: string
  }
  
function extractIdsStrict (list: Member[]) {
    return list.map(member => member.id)
}

// noImplicitThis

// non-strict mode
function uppercaseLabel () {
    return this.label.toUpperCase()
}
const demo = {
    label: 'Hello',
    uppercaseLabel
}

// strict mode
const demo1 = {
    label: 'Hello',
    uppercaseLabel : ()=>{
        return this.label.toUpperCase()
    }
}

// strictBindCallApply
// strict mode
function sum (...args: number[]) {
    return args.reduce<number>((total, num) => total + num, 0)
}
  
console.log(sum.apply(null, [1, 2, 3]))