type Course = {
    title:string
    monthDuration:number
}

// class Course{
//     constructor(public title:string, public monthDuration:number ) {
//     }
// }

let coursesAndDurationArray:Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 5}
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
type Card = {
    cardSuit:string
    value: string
    color: Color
}
// class Card{
//     cardSuit:string
//     value:string
//     color:Color
//
//     constructor(cardSuit: string, value: string, color: Color) {
//         this.cardSuit = cardSuit;
//         this.value = value;
//         this.color = color;
//     }
// }
let cards:Card[] = []
let cardSuit:Suit[] = [Suit.spade, Suit.diamond,Suit.heart, Suit.clubs]
let value:string[] = [ '6', '7', '8', '9', '10', 'ace','jack','queen','king']
for (const suit of cardSuit) {
    for (const item of value) {
        if (suit === Suit.spade || suit === Suit.clubs){
            cards.push({cardSuit :suit, value: item, color: Color.black})//{cardSuit: suit, value: item, color: 'black'}
        }else if(suit === Suit.heart || suit === Suit.diamond){
            cards.push({cardSuit :suit, value: item, color: Color.red})//{cardSuit: suit, value: item, color: 'red'}
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
type Acc = {
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
type CourseNew = Course & {
    hourDuration:number
    modules:string[]
}
// class CourseNew extends Course{
//     constructor(title: string, monthDuration: number, public hourDuration:number, public modules:string[]) {
//         super(title, monthDuration);
//     }
// }
let coursesArray:CourseNew[] = [
    {title: 'JavaScript Complex', monthDuration: 5, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']},
    {title: 'Java Complex', monthDuration: 6, hourDuration: 909, modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']},
    {
        title: 'Python Complex', monthDuration: 6, hourDuration :909, modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration :909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration :909,
        modules: ['html',
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
    }
    ,
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration :909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// console.log(coursesArray.filter((value:CourseNew) => value.modules.includes('sass')))
// console.log(coursesArray.filter((value:CourseNew) => value.modules.includes('docker')))


