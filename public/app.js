import { Payment } from "./classes/payment.js";
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
// interface Resource <T> {
//     uid: number
//     resourceName: string
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shopping',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// ENUMS
// enum Resourcetype { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource <T> {
//     uid: number
//     resourceType: Resourcetype
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceType: Resourcetype.BOOK,
//     data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceType: Resourcetype.PERSON,
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// TUPLES
// let stu: [string, string, boolean, number] = ['henry','lusaka', true, 21]
