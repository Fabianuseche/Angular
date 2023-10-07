
function addNumbers(a:any, b:any){
    return a+b;
}
const addNumbersArrow= (a:number, b:number)=>{
    return `El resultado es ${a+b}`  ;
}

function multiply(firstNumber: number, secondNumber?: number, base:number=2){
    return firstNumber*base;
}

const healCharacter = (character: Character, amount:number)=>{
    character.hp += amount
}

const jugador:Character={
    name: "Fabian",
    hp: 50,
    showHp(){
        console.log(`Puntos ${this.hp} `);
    }
}

      
    healCharacter(jugador,30)
    jugador.showHp()  

interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}
// const result:number = addNumbers(7,7)
// const result2:string = addNumbersArrow(7,3)
// const multupliResult:number = multiply(5)

// console.log(result)
// console.log(result2)
// console.log(multupliResult)



export{}