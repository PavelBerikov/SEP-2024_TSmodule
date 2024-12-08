
/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let arr:any[] = [1, 2, 3, 'name', 1 > 2, 'lorem', true, false, [], 3.14]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

    class Book {
        constructor(public title: string, public pageCount: number, public genre: string) {
        }
    }
    const book1 = new Book('last wish', 500, 'fantasy')
    const book2 = new Book('Sword of destiny', 450, 'fantasy')
    const book3 = new Book('Elven blood', 650, 'fantasy')
    console.log(book1, book2, book3)

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
{
    class BookAuthors extends Book{

        constructor(title: string, pageCount: number, genre: string, public authors:(number|string)[]) {
            super(title, pageCount, genre);
        }
    }
    const book1 = new BookAuthors('last wish', 500, 'fantasy', ['Oscar Wilde', 36])
    const book2 = new BookAuthors('Sword of destiny', 450, 'fantasy', ['Charles Michael «Chuck» Palahniuk', 40])
    const book3 = new BookAuthors('Elven blood', 650, 'fantasy', ['Ernest Hemingway', 45])
    console.log(book1, book2, book3);

}
/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
{
    class User{
        constructor(public name:string, public username:string, public password:string) {
        }
    }
    let user:User[] = [
        new User('Pasha', 'NoooB', 'h47fndh'),
        new User('Sasha', 'Sweet', '7fh46dbs'),
        new User('Misha', 'apple12','md83md'),
        new User('Katya', 'loop','29mfj7vs'),
        new User('Lena', 'Poleno','127gnvj'),
        new User('Mia', 'Zona117','nyc326'),
        new User('Albina', 'arbat64','coi3434c687'),
        new User('Vika', '12krot12','c426rv'),
        new User('Jhon', 'azkaban','3cmfh7'),
        new User('Katya', 'loop','29mfj7vs')
    ]
    console.log(user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password)

}
/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/
{
    class Day{
        constructor(public morning: number, public afternoon: number, public evening: number) {
        }
    }
    const monday = new Day(11, 12, 13)
    const tuesday = new Day(10, 17, 14)
    const wednesday = new Day(11, 19, 16)
    const thursday = new Day(13, 20, 17)
    const friday = new Day(14, 21, 18)
    const saturday = new Day(15, 22, 19)
    const sunday = new Day(13, 20, 17)
    let temp:Day[] = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    console.log(temp)
}
/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
{
    let x:number = -3
    if (x !== 0) {
        console.log(`Вірно!`)
    } else {
        console.log(`Невірно!`)
    }
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
{
    let time:number = 44
    if (time < 0) {
        console.log('Помилка')
    }else if (time <= 15) {
        console.log('Перша четверть')
    }else if (time <= 30) {
        console.log('Друга четверть')
    }else if (time <= 45) {
        console.log('Третя четверть')
    }else if (time <= 59) {
        console.log('Четверта четверть')
    } else {
        console.log('Помилка')
    }
}
/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
{
    let day:number = 20
    if (day < 0) {
        console.log('Помилка')
    }else if (day <= 10) {
        console.log('Перша декада')
    }else if (day <=20) {
        console.log('Друга декада')
    }else if (day <= 31) {
        console.log('Третя декада')
    }else {
        console.log('Помилка')
    }
}
/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
{
    let a:string = prompt('День тижня')
    switch (a) {
        case '7':
            console.log('Sunday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '2':
            console.log('Tuesday');
            break;

        case '1':
            console.log('Monday');
            break;
        default:
            console.log('Err')
    }
}
/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/
{
    let a:string = prompt('Число 1')
    let b:string = prompt('Число 2')
    if (a === b) {
        console.log('Числа рівні')
    } else if (a < b) {
        console.log(b)
    } else {
        console.log(a)
    }
}
/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
*/
{
    let a:string = ''
    if (!a){
        a = 'default'
    }
    console.log(a)
}
/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
{
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
