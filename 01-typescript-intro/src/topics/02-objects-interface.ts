
const skills: string[] =["Volar", "nadar"];
 
const Personaje1:Character={
    name:"fabian",
    puntaje:100,
    bueno:true,
    skills:["correr"]
}

interface Character{
    name:string,
    puntaje:number,
    bueno?:Boolean,
    skills:string[]
}

console.table(Personaje1)

export{}