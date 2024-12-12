/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length)
/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase())
/*- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase())
/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
let str:string = ' dirty string   '
console.log(str.trim())
/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
{
    let str:string = 'Ревуть воли як ясла повні';
    const stringToArray = (str:string):string[] => str.split(' ')
    console.log(stringToArray(str))
}
/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/
console.log([10,8,-7,55,987,-1011,0,1050,0].map(value => value.toString()))
/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/
enum Direction{
    'ascending',
    'descending'
}
let nums:number[] = [11,21,3];
const sortNums = (arr:number[], direction:Direction):void => {
    if (direction === Direction.ascending){
        console.log(arr.sort((a, b) => a - b))
    }else if (direction === Direction.descending){
        console.log(arr.sort((a, b) => b - a))
    }
}
sortNums(nums,Direction.ascending) // [3,11,21]
sortNums(nums,Direction.descending) // [21,11,3]


class Course{
    constructor(public title:string, public monthDuration:number ) {
    }
}
let coursesAndDurationArray:Course[] = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 5)
];
/*-- відсортувати його за спаданням за monthDuration*/
console.log(coursesAndDurationArray.sort((a:Course, b:Course):number => b.monthDuration - a.monthDuration))
/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
console.log(coursesAndDurationArray.filter((value:Course):boolean => value.monthDuration > 5))
/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
console.log(coursesAndDurationArray.map((value:Course, index:number):object => {
    return {id: index + 1, ...value}
}))
/*=========================
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
value: '', // '6'-'10', 'ace','jack','queen','king','joker'
color:'', // 'red','black'
}*/
enum Color{
    'black',
    'red'
}
enum Suit{
    spade = 'spade',
    diamond = 'diamond',
    heart = 'heart',
    clubs = 'clubs'
}
class Card{
    cardSuit:string
    value:string
    color:Color

    constructor(cardSuit: string, value: string, color: Color) {
        this.cardSuit = cardSuit;
        this.value = value;
        this.color = color;
    }
}
let cards:Card[] = []
let cardSuit:Suit[] = [Suit.spade, Suit.diamond,Suit.heart, Suit.clubs]
let value:string[] = [ '6', '7', '8', '9', '10', 'ace','jack','queen','king']
for (const suit of cardSuit) {
    for (const item of value) {
        if (suit === Suit.spade || suit === Suit.clubs){
            cards.push(new Card(suit, item, Color.black))//{cardSuit: suit, value: item, color: 'black'}
        }else if(suit === Suit.heart || suit === Suit.diamond){
            cards.push(new Card(suit, item, Color.red))//{cardSuit: suit, value: item, color: 'red'}
        }
    }
}
console.log(cards.filter((value:Card):boolean => value.cardSuit === 'spade' && value.value === 'ace'))
console.log(cards.filter((value:Card):boolean => value.value === '6'))
console.log(cards.filter((value:Card):boolean => value.color === Color.red))
console.log(cards.filter((value:Card):boolean => value.cardSuit === 'diamond'))
console.log(cards.filter((value:Card):boolean => value.cardSuit === 'clubs' && (parseInt(value.value) >= 9 || !parseInt(value.value) )))
/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
spades:[],
diamonds:[],
hearts:[],
clubs:[]
}*/
class Acc{
    spades:Card[]
    diamonds:Card[]
    hearts:Card[]
    clubs:Card[]
}
console.log(cards.reduce((accum:Acc, card:Card):Acc => {
    switch (card.cardSuit){
        case 'spade':
            accum.spades.push(card)
            break
        case 'clubs':
            accum.clubs.push(card)
            break
        case 'heart':
            accum.hearts.push(card)
            break
        case 'diamond':
            accum.diamonds.push(card)
            break

    }
    return accum
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}))
/*взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker*/
class CourseNew extends Course{
    constructor(title: string, monthDuration: number, public hourDuration:number, public modules:string[]) {
        super(title, monthDuration);
    }
}
let coursesArray:CourseNew[] = [
   new CourseNew ('JavaScript Complex', 5, 909, ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    ),
   new CourseNew ('Java Complex', 6, 909, ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
),
   new CourseNew (
        'Python Complex',
         6,
         909,
         ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    ),
   new CourseNew (
        'QA Complex',
         4,
         909,
         ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    ),
   new CourseNew (
        'FullStack',
         7,
         909,
         ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    ),
   new CourseNew (
        'Frontend',
         4,
         909,
         ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    )
];
// console.log(coursesArray.filter((value:CourseNew) => value.modules.includes('sass')))
// console.log(coursesArray.filter((value:CourseNew) => value.modules.includes('docker')))


