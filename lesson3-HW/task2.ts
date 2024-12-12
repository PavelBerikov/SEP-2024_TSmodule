/*Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон*/
type Product = {
    title:string
    price:number
    image:string
}
let products:Product[] = [
    {
        title: 'milk',
        price: 22,
        image :'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'}, {
        title: 'juice',
        price: 27,
        image :'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    }, {
        title: 'tomato',
        price: 47,
        image :'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image :'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i:number = 0; i < products.length; i++) {
    document.write(`<div class='product-card'>`)
    document.write(`<h3>${products[i].title}. Price - ${products[i].price}</h3>`)
    document.write(`<img src='${products[i].image}' alt="${products[i].title}">`)
    document.write(`</div>`)
}
/*за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років*/
type User = {
    name: string
    age: number
    status: boolean
}

let users:User[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status){
        console.log(user)
    }
}
for (const user of users) {
    if (!user.status){
        console.log(user)
    }
}
for (const user of users) {
    if (user.age > 30){
        console.log(user)
    }
}
/*- Дано 2 масиви з рівною кількістю об'єктів.
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
]*/
type UserId = User &{
    id: number
}
let usersWithId:UserId[] = [
    {id: 1, name : 'vasya', age:  31, status: false},
    {id: 2, name : 'petya', age:  30, status: true},
    {id: 3, name : 'kolya', age:  29, status: true},
    {id: 4, name : 'olya', age:  28, status: false}
];
type ICity = {
    user_id: number
    country: string
    city: string
}
// class City{
//     constructor(public user_id:number, public country:string, public city:string) {
//     }
// }
let citiesWithId:ICity[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
type UserAddress = {
    user: UserId
    address: ICity
}
let newArr:UserAddress[] = []
for (let i:number = 0; i < usersWithId.length; i++) {
    let user:UserId = usersWithId[i]
    for (let j:number = 0; j < citiesWithId.length; j++) {
        let address:ICity = citiesWithId[j]
        if (user.id === address.user_id){
            newArr[i] = {
                user:user,
                address:address
            }
        }

    }
}
console.log(newArr)
