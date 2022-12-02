// classes
class Invoice {
    client: string
    details: string
    amount: number

    constructor(c:string, d:string, a:number){
        this.client = c
        this.details = d
        this.amount = a
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Mario','work on the mario website', 250);
const invTwo = new Invoice('Mary','work on the mary website', 150);
// console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format()); 
});


// const anchor = document.querySelector('a');console.log(anchor?.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();


    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    );
});
