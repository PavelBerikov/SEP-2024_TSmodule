/*- створити функцію яка об числює та повертає площу прямокутника зі сторонами а і б*/
const areaRec = (a: number, b: number): number => a * b;
console.log(areaRec(2, 3));

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
const areaCircle = (r: number): number => Math.PI * (r ** 2);
console.log(areaCircle(3));

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
const areaCone = (r: number, h: number): number => 2 * Math.PI * r * (r + h);
console.log(areaCone(2, 3));

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
const iter = (arr: any[]): void => {
    for (const item of arr) {
        console.log(item);
    }
};
iter([1, 2, 3, '', true]);

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
const creatorP = (txt: string): void => {
    document.write(`<p>${txt}</p>`);
};
creatorP('lorem5 lorem5 lorem5 lorem5 lorem5');

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
const creatorUl = (txt: string): void => {
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);
};
creatorUl('lorem');

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
const creatorUlHard = (txt: string, count: number): void => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
};
creatorUlHard('lorem', 5);

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
const transformerArr = (arr: (string | number | boolean)[]): void => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
};
transformerArr([1, 'max', 2, true, 'proof']);

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/
class User {
    constructor(public id: number, public name: string, public age: number) {}
}
const users: User[] = [
    new User(1, "Alice", 25),
    new User(2, "Bob", 30),
    new User(3, "Charlie", 22),
    new User(4, "David", 35),
    new User(5, "Eva", 28)
];
const divCreator = (arr: User[]): void => {
    for (const item of arr) {
        document.write(`<div>`);
        document.write(`Id - ${item.id} `);
        document.write(`Name - ${item.name} `);
        document.write(`Age - ${item.age}`);
        document.write(`</div>`);
    }
};
divCreator(users);

/*- створити функцію яка повертає найменьше число з масиву*/
const nums: number[] = [-100, 2, 4, 6, 22, 11, -2];
const minNum = (arr: number[]): void => {
    let min: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
};
minNum(nums);

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.*/
const arrNums: number[] = [1, 2, 3, 4, 5];
const sum = (arr: number[]): number => {
    let count = 0;
    for (const item of arr) {
        count += item;
    }
    return count;
};
console.log(sum(arrNums));

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах*/
const swap = (arr: number[], index1: number, index2: number): void => {
    let id1: number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = id1;
    console.log(arr);
};
swap([1, 2, 3, 4], 2, 3);

/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)*/
enum Cur {
    'USD',
    'EUR'
}
class Currency {
    constructor(public currency: Cur, public value: number) {}
}
const exchange = (sumUAH: number, currencyValues: Currency[], exchangeCurrency: Cur): void => {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            console.log(sumUAH / item.value);
        }
    }
};
exchange(10000, [new Currency(Cur.USD, 40), new Currency(Cur.EUR, 42)], Cur.USD);
