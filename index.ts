let age: number = 39
let firstName: string = "Jonathan"
let isTeaching: boolean = false

const classes: string[] = ["javascript","typescript"]
let NumberOfStudents: number[] = [23,14]
NumberOfStudents.push(age);
// console.log(NumberOfStudents)


enum TaxForms {
    incomeTax="Tax form 1099",
    childCare="Tax form 244", 
    bitcoinLoss="The crypto form",
    richDude="Omg I'm never going to get this",
    richLady="Omg I'm never going to get this!",
}

const WhichTaxForm = TaxForms.childCare
// console.log("use tax form: ",WhichTaxForm)


let postalcode:number | string = "L3p-6R8"
postalcode = 33333
// console.log(postalcode)


function findIndex (index: number,arr: number[]): number {

    return arr[index]
}

function log(msg: any): void { 
    //inserts into the database
    console.log(msg)
}

let finalNumber: number = findIndex(1,NumberOfStudents)
// log(finalNumber + 1)
// log("yep. it's not going to return something")

const complexObject : any = {name: "damian", height: "yes please", age: 49}

interface Human {
    name: string
    height: string
}

interface Teacher extends Human {
    age: number
    weight?: string
}


const complexObject2 : Teacher = {name: "damian", height: "yes please", age: 49 }

function displayteacher(teacher: Teacher): string {
    return `this teacher is ${teacher.age} old`

}

console.log(displayteacher(complexObject2))




// console.log("You're how old: ",age)