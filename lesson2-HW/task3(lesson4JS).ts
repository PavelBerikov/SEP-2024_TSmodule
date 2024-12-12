/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
interface IUser {
    id:number
    name: string
    age: number
}
// class User{
//     constructor(public id:number, public name:string, public age:number) {
//     }
// }
const users:IUser[] = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 22},
    {id: 4, name: "David", age: 35},
    {id: 5, name: "Eva", age: 28}
];
function divCreator(arr:IUser[]):void {
    for (const item of arr) {
        document.write(`<div>`)
        document.write(`Id - ${item.id} `)
        document.write(`Name - ${item.name} `)
        document.write(`Age - ${item.age}`)
        document.write(`</div>`)
    }
}
divCreator(users)
/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
enum Cur{
    'USD',
    'EUR'
}
interface ICurrency {
    currency:Cur
    value: number
}
// class Currency{
//     constructor(public currency:Cur, public value:number) {
//     }
// }
function exchange(sumUAH:number,currencyValues:ICurrency[],exchangeCurrency:Cur):void{
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            console.log(sumUAH / item.value)
        }
    }
}
exchange(10000,[{currency: Cur.USD, value :40}, {currency: Cur.EUR, value: 42}],Cur.USD)
