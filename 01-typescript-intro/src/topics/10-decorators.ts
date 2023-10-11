


export class SuperClass{
    public myProperty: string= 'abc123'

    print(){
        console.log("Hola Fab")
    }
}

console.log(SuperClass)

const myClass= new SuperClass()
console.log(myClass)