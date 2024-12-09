
/*- створити функцію яка об числює та повертає площу прямокутника зі сторонами а і б*/
function areaRec(a:number, b:number):number{
    return a * b
}
console.log(areaRec(2,3))

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
function areaCircle(r:number):number{
    return Math.PI*(r**2)
}
console.log(areaCircle(3))
/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
function areaCone(r:number, h:number):number{
    return 2 * Math.PI * r * (r + h)
}
console.log(areaCone(2, 3))

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
function iter(arr:any[]):void{
    for (const item of arr) {
        console.log(item)
    }
}
iter([1, 2, 3, '', true])
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
function creatorP(txt:string):void{
    document.write(`<p>${txt}</p>`)
}
creatorP('lorem5 lorem5 lorem5 lorem5 lorem5')
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
function creatorUl(txt:string):void{
    document.write(`<ul>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`<li>${txt}</li>`)
    document.write(`</ul>`)
}
creatorUl('lorem')
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
function creatorUlHard(txt:string, count:number):void{
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}
creatorUlHard('lorem', 5)
/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
const arr:(string|number|boolean)[] = [1, 'max', 2, true, 'proof']
function transformerArr(arr:any):void{
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
transformerArr(arr)
/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
class User{
    constructor(public id:number, public name:string, public age:number) {
    }
}
const users:User[] = [
    new User (1, "Alice", 25),
    new User (2, "Bob", 30),
    new User (3, "Charlie", 22),
    new User (4, "David", 35),
    new User (5, "Eva", 28)
];
function divCreator(arr:User[]):void {
    for (const item of arr) {
        document.write(`<div>`)
        document.write(`Id - ${item.id} `)
        document.write(`Name - ${item.name} `)
        document.write(`Age - ${item.age}`)
        document.write(`</div>`)
    }
}
divCreator(users)
/*- створити функцію яка повертає найменьше число з масиву*/
const nums:number[] = [-100, 2, 4, 6, 22, 11, -2];
function minNum(arr:number[]):void {
    let min:number = 0;
    for (let i:number = 0; i < arr.length; i++) {
        if (min > arr[i]){
            min = arr[i]
        }
    }
    console.log(min)
}
minNum(nums)
/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/
const arrNums:number[] = [1, 2, 3, 4, 5]
function sum(arr:number[]):number{
    let count = 0;
    for (const item of arr) {
        count += item
    }
    return count
}

console.log(sum(arrNums))
/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах*/
let newArr:number[] = [1, 2, 3, 4]
function swap(arr:number[], index1:number, index2:number):void{
    let id1:number = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = id1
    console.log(arr)
}

swap(newArr, 2,3)
/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
enum Cur{
    'USD',
    'EUR'
}
class Currency{
    constructor(public currency:Cur, public value:number) {
    }
}
function exchange(sumUAH:number,currencyValues:Currency[],exchangeCurrency:Cur):void{
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            console.log(sumUAH / item.value)
        }
    }
}
exchange(10000,[new Currency(Cur.USD, 40), new Currency(Cur.EUR, 42)],Cur.USD)
