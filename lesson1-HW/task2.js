/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
var arr = [1, 2, 3, 'name', 1 > 2, 'lorem', true, false, [], 3.14];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
{
    var Book = /** @class */ (function () {
        function Book(title, pageCount, genre) {
            this.title = title;
            this.pageCount = pageCount;
            this.genre = genre;
        }
        return Book;
    }());
    var book1 = new Book('last wish', 500, 'fantasy');
    var book2 = new Book('Sword of destiny', 450, 'fantasy');
    var book3 = new Book('Elven blood', 650, 'fantasy');
    console.log(book1, book2, book3);
}
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
{
    var Book = /** @class */ (function () {
        function Book(title, pageCount, genre, authors) {
            this.title = title;
            this.pageCount = pageCount;
            this.genre = genre;
            this.authors = authors;
        }
        return Book;
    }());
    var book1 = new Book('last wish', 500, 'fantasy', ['Oscar Wilde', 36]);
    var book2 = new Book('Sword of destiny', 450, 'fantasy', ['Charles Michael «Chuck» Palahniuk', 40]);
    var book3 = new Book('Elven blood', 650, 'fantasy', ['Ernest Hemingway', 45]);
    console.log(book1, book2, book3);
}
/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
{
    var User = /** @class */ (function () {
        function User(name, username, password) {
            this.name = name;
            this.username = username;
            this.password = password;
        }
        return User;
    }());
    var user = [
        new User('Pasha', 'NoooB', 'h47fndh'),
        new User('Sasha', 'Sweet', '7fh46dbs'),
        new User('Misha', 'apple12', 'md83md'),
        new User('Katya', 'loop', '29mfj7vs'),
        new User('Lena', 'Poleno', '127gnvj'),
        new User('Mia', 'Zona117', 'nyc326'),
        new User('Albina', 'arbat64', 'coi3434c687'),
        new User('Vika', '12krot12', 'c426rv'),
        new User('Jhon', 'azkaban', '3cmfh7'),
        new User('Katya', 'loop', '29mfj7vs')
    ];
    console.log(user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password);
}
/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/
{
    var Day = /** @class */ (function () {
        function Day(morning, afternoon, evening) {
            this.morning = morning;
            this.afternoon = afternoon;
            this.evening = evening;
        }
        return Day;
    }());
    var monday = new Day(11, 12, 13);
    var tuesday = new Day(10, 17, 14);
    var wednesday = new Day(11, 19, 16);
    var thursday = new Day(13, 20, 17);
    var friday = new Day(14, 21, 18);
    var saturday = new Day(15, 22, 19);
    var sunday = new Day(13, 20, 17);
    var temp = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    console.log(temp);
}
/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
{
    var x = -3;
    if (x !== 0) {
        console.log("\u0412\u0456\u0440\u043D\u043E!");
    }
    else {
        console.log("\u041D\u0435\u0432\u0456\u0440\u043D\u043E!");
    }
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
{
    var time = 44;
    if (time < 0) {
        console.log('Помилка');
    }
    else if (time <= 15) {
        console.log('Перша четверть');
    }
    else if (time <= 30) {
        console.log('Друга четверть');
    }
    else if (time <= 45) {
        console.log('Третя четверть');
    }
    else if (time <= 59) {
        console.log('Четверта четверть');
    }
    else {
        console.log('Помилка');
    }
}
/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
{
    var day = 20;
    if (day < 0) {
        console.log('Помилка');
    }
    else if (day <= 10) {
        console.log('Перша декада');
    }
    else if (day <= 20) {
        console.log('Друга декада');
    }
    else if (day <= 31) {
        console.log('Третя декада');
    }
    else {
        console.log('Помилка');
    }
}
/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
{
    var a = prompt('День тижня');
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
            console.log('Err');
    }
}
/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/
{
    var a = prompt('Число 1');
    var b = prompt('Число 2');
    if (a === b) {
        console.log('Числа рівні');
    }
    else if (a < b) {
        console.log(b);
    }
    else {
        console.log(a);
    }
}
/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
*/
{
    var a = '';
    if (!a) {
        a = 'default';
    }
    console.log(a);
}
/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
{
    var Course = /** @class */ (function () {
        function Course(title, monthDuration) {
            this.title = title;
            this.monthDuration = monthDuration;
        }
        return Course;
    }());
    var coursesAndDurationArray = [
        new Course('JavaScript Complex', 5),
        new Course('Java Complex', 6),
        new Course('Python Complex', 6),
        new Course('QA Complex', 4),
        new Course('FullStack', 7),
        new Course('Frontend', 5)
    ];
    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log('super');
    }
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log('super');
    }
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log('super');
    }
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log('super');
    }
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log('super');
    }
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log('super');
    }
}
