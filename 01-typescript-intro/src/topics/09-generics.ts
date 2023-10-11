

export function whatsMyType<T>(argument:T){
    return argument
}

let iamString =whatsMyType<string>("Hola Yortas")
let iamNumber =whatsMyType<number>(123)
let iamArray =whatsMyType<number[]>([1,2,3,4,5])


console.log(iamString.split(''))
console.log(iamNumber.toFixed())
console.log(iamArray.join('-'))