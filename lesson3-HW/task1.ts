/* - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre. */
type Book = {
    title: string;
    pageCount: number;
    genre: string;
};

const book1: Book = { title: 'last wish', pageCount: 500, genre: 'fantasy' };
const book2: Book = { title: 'Sword of destiny', pageCount: 450, genre: 'fantasy' };
const book3: Book = { title: 'Elven blood', pageCount: 650, genre: 'fantasy' };

console.log(book1, book2, book3);

/* - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age. */
type Author = {
    name: string;
    age: number;
};

type BookWithAuthors = {
    title: string;
    pageCount: number;
    genre: string;
    authors: Author[];
};

const bookWithAuthors1: BookWithAuthors = {
    title: 'last wish',
    pageCount: 500,
    genre: 'fantasy',
    authors: [{ name: 'Oscar Wilde', age: 36 }],
};

const bookWithAuthors2: BookWithAuthors = {
    title: 'Sword of destiny',
    pageCount: 450,
    genre: 'fantasy',
    authors: [{ name: 'Charles Michael «Chuck» Palahniuk', age: 40 }],
};

const bookWithAuthors3: BookWithAuthors = {
    title: 'Elven blood',
    pageCount: 650,
    genre: 'fantasy',
    authors: [{ name: 'Ernest Hemingway', age: 45 }],
};

/* - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password. Вивести в консоль пароль кожного користувача */
type User = {
    name: string;
    username: string;
    password: string;
};

const users: User[] = [
    { name: 'Pasha', username: 'NoooB', password: 'h47fndh' },
    { name: 'Sasha', username: 'Sweet', password: '7fh46dbs' },
    { name: 'Misha', username: 'apple12', password: 'md83md' },
    { name: 'Katya', username: 'loop', password: '29mfj7vs' },
    { name: 'Lena', username: 'Poleno', password: '127gnvj' },
    { name: 'Mia', username: 'Zona117', password: 'nyc326' },
    { name: 'Albina', username: 'arbat64', password: 'coi3434c687' },
    { name: 'Vika', username: '12krot12', password: 'c426rv' },
    { name: 'Jhon', username: 'azkaban', password: '3cmfh7' },
    { name: 'Katya', username: 'loop', password: '29mfj7vs' },
];

users.forEach(user => console.log(user.password));

/* - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу */
type DayTemperatures = {
    morning: number;
    afternoon: number;
    evening: number;
};

const weekTemperatures: DayTemperatures[] = [
    { morning: 11, afternoon: 12, evening: 13 },
    { morning: 10, afternoon: 17, evening: 14 },
    { morning: 11, afternoon: 19, evening: 16 },
    { morning: 13, afternoon: 20, evening: 17 },
    { morning: 14, afternoon: 21, evening: 18 },
    { morning: 15, afternoon: 22, evening: 19 },
    { morning: 13, afternoon: 20, evening: 17 },
];

console.log(weekTemperatures);

/* - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер". */
type Course = {
    title: string;
    monthDuration: number;
};

const coursesAndDurationArray: Course[] = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 5 },
];

coursesAndDurationArray.forEach(course => {
    if (course.monthDuration > 5) {
        console.log('Супер');
    }
});