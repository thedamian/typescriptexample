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

let finalNumber: number = findIndex(1,NumberOfStudents)
console.log(finalNumber + 1)


// console.log("You're how old: ",age)