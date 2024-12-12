
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
interface IBook {
    title: string
    pageCount: number
    genre: string
}
interface IAuthors extends IBook{
    authors: (number|string)[]
}
class Book implements IBook{
    constructor(public title: string, public pageCount: number, public genre: string) {
    }
}
const book1 = new Book('last wish', 500, 'fantasy')
const book2 = new Book('Sword of destiny', 450, 'fantasy')
const book3 = new Book('Elven blood', 650, 'fantasy')
console.log(book1, book2, book3)

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
{

    const book1: IAuthors = {
        title:'last wish',
        pageCount: 500,
        genre: 'fantasy',
        authors: ['Oscar Wilde', 36]
    }
    const book2: IAuthors = {
        title:'Sword of destiny',
        pageCount: 500,
        genre: 'fantasy',
        authors: ['Charles Michael «Chuck» Palahniuk', 40]
    }
    const book3:IAuthors = {
        title:'Elven blood',
        pageCount: 500,
        genre: 'fantasy',
        authors: ['Ernest Hemingway', 45]
    }
}
/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
{
    interface IUser{
        name: string
        username: string
        password: string
    }
    // class User{
    //     constructor(public name:string, public username:string, public password:string) {
    //     }
    // }
    let user:IUser[] = [
        {name :'Pasha', username :'NoooB', password : 'h47fndh'},
        {name :'Sasha', username :'Sweet', password : '7fh46dbs'},
        {name :'Misha', username :'apple12',password : 'md83md'},
        {name :'Katya', username :'loop',password : '29mfj7vs'},
        {name :'Lena', username :'Poleno',password : '127gnvj'},
        {name :'Mia', username :'Zona117',password : 'nyc326'},
        {name :'Albina', username :'arbat64',password : 'coi3434c687'},
        {name :'Vika', username :'12krot12',password : 'c426rv'},
        {name :'Jhon', username :'azkaban',password : '3cmfh7'},
        {name :'Katya', username: 'loop', password: '29mfj7vs'}
    ]
    console.log(user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password)

}
/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/
{
    interface IDay{
        morning: number
        afternoon: number
        evening: number
    }
    const monday:IDay = {morning: 11, afternoon: 12, evening: 13}
    const tuesday:IDay = {morning: 10, afternoon: 17, evening: 14}
    const wednesday:IDay = {morning: 11, afternoon: 19, evening: 16}
    const thursday:IDay = {morning: 13, afternoon: 20, evening: 17}
    const friday:IDay = {morning: 14, afternoon: 21, evening: 18}
    const saturday:IDay = {morning: 15, afternoon: 22, evening: 19}
    const sunday:IDay = {morning: 13, afternoon: 20, evening: 17}
    let temp:IDay[] = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    console.log(temp)
}
/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
{
    interface ICourse{
        title:string
        monthDuration:number
    }

    let coursesAndDurationArray:ICourse[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 5}
    ];
    if (coursesAndDurationArray[0].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[1].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[2].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[3].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[4].monthDuration > 5){
        console.log('super')
    }
    if (coursesAndDurationArray[5].monthDuration > 5){
        console.log('super')
    }
}
