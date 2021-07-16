// чек магазина , в нем есть цена товара, название и количество.
// 1. вывести чек (название , цена за ед. количество , общая сумма одной позиции , общая сумма чека )

// 2. добавить товар в чек (если позициия существует то ++)






function show(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);

    }
}

let item1 = { name: "apple", price: 2, quantity: 5, };
let item2 = { name: "banana", price: 3, quantity: 2, };
let item3 = { name: "meet", price: 90, quantity: 1, };
let item4 = { name: "milk", price: 45, quantity: 2, };
let item5 = { name: "tomato", price: 15, quantity: 3, };

let check = [item1, item2, item3, item4, item5]

let items = {
    name: "",
    price: "",
    quantity: "",
};
let add = (items) => {

    for (let i = 0; i < check.length; i++) {
        if (items.name == check.name) {
            check.quantity++;
            return
        }

    }
    check.push(items)

}


let checkMapped = check.map(prices => ({
    totalPrice: prices.price * prices.quantity

}));



function result(arr) {
    let finishPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(
            " Наименование: " + check[i].name +
            " Цена за еденицу: " + check[i].price +
            " Количество: " + check[i].quantity +
            " Общая цена: " + checkMapped[i].totalPrice
        );

        finishPrice += checkMapped[i].totalPrice;
    }
    console.log(" Общая сумма чека : " + finishPrice + " грн.");
}
result(check)






// 3.два масива которые состоят из 10 цыфр .

// 3.1(нужно обеденить два масива и если числа повторяются то они не добовляются в масив)
// 3.2(добавить в масив те числа которые уже есть в другом масиве)


let firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let secondNumbers = [1, 2, 3, 11, 7, 22, 11, 2]


let data = {};

firstNumbers.concat(secondNumbers).forEach(function(item) {
    data[item] = true;
});

console.log(Object.keys(data));



// let result = [];
// firstNumbers.concat(secondNumbers).forEach(function(item) {
//     if (firstNumbers[item] == secondNumbers[item]) {
//         result[item] += secondNumbers[item]
//     }
//     result[item] += firstNumbers[item]
// })
// console.log(Object.keys(result));



let a = [];

for (let i = 0; i < firstNumbers.length; i++) {

    for (let j = 0; j < firstNumbers.length; j++) {
        if (firstNumbers[i] == secondNumbers[j]) {
            a.push(secondNumbers[i])
        }
    }

    a.push(firstNumbers[i])
}
//alert(a);


//Реализовать класс , которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его
// соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу
// метода.

// let welcome = "Hello World";

// class Name {
//     constructor(size, color, fontFamely) {
//         this.size = size;
//         this.color = color;
//         this.fontFamely = fontFamely;
//     }

//     print(welcome) {
//         document.write(`<h1 style="font-size: ${this.size};color: ${this.color};font-famely: ${this.fontFamely};">${welcome}</h1>`)
//     }
// }

// let shows = new Name("30px", "red", "Roboto");
// shows.print(welcome);


// Реализовать класс, описывающий новость (заголовок, текст,
//     массив тегов, дата публикации). В классе необходимо реализовать
//     один метод print, который выводит всю информацию в таком
//     виде.
//     Обратите внимание на то, как выводится дата:
//     ■ если с даты публикации прошло менее дня, то выводится
//     «сегодня»;
//     2
//     ■ если с даты публикации прошло менее недели, то выводится «N дней назад»;
//     ■ в остальных случаях, полная дата в формате «дд.мм.гггг»

// class Header {
//     constructor(head, text, massive, date) {
//         this.head = head;
//         this.text = text;
//         this.massive = massive;
//         this.date = date;
//     }
//     print() {
//         let div = document.createElement("div")
//         let head = document.createElement("h2")
//         head.innerHTML = this.head;
//         div.append(head)


//         let date = document.createElement("p")
//         date.innerHTML = this.date;
//         div.append(date)

//         let text = document.createElement("p")
//         text.innerHTML = this.text
//         div.append(text)

//         let massive = document.createElement("ul")
//         this.massive.forEach(value => {
//             let li = document.createElement("li")
//             li.innerHTML = value
//             massive.append(li)
//         })

//         div.append(massive)

//         document.querySelector("body").append(div)

//     }

// }
// let zzz = new Header("HEAD", "Text", ["01", "02", "03", "04", "05"], "date 01 01 01")

// zzz.print()


// Задание 3
// Реализовать класс, описывающий новостную ленту.
// Класс должен содержать:
// массив новостей;
//get-свойство, которое возвращает количество новостей;
// метод для вывода на экран всех новостей;
// метод для добавления новости;
// метод для удаления новости;
// метод для сортировки новостей по дате (от последних новостей до старых);
// метод для поиска новостей по тегу (возвращает массив
// новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.


// class News {
//     constructor(newsMassive, pushNews, ) {
//         this.newsMassive = newsMassive;
//         this.pushNews = pushNews;
//     }
//     print() {
//         let div = document.createElement("div")
//         let newsMassive = [];
//         this.newsMassive.push(this.pushNews)
//         this.newsMassive.push(this.pushNews)
//         this.newsMassive.pop()
//         newsMassive = document.createElement("ul")
//         this.newsMassive.forEach(value => {
//             let li = document.createElement("li")
//             li.innerHTML = value
//             newsMassive.append(li)
//         })
//         div.append("Quantity news is : " + this.newsMassive.length);
//         let showNews = prompt("do you whont watch the news ?", "ok")
//         if (showNews == "ok") {
//             div.append(newsMassive)
//         } else { alert("please refresh window and input (ok )") }
//         document.querySelector("body").append(div)
//     }
// }
// let prnt = new News(["news one", "news two", "news three", "news four"], "Hot NEWS")
// prnt.print()



// document.querySelector("body").addEventListener("click", () => {
//     console.log("left mouse");
// })

// document.querySelector("body").addEventListener("contextmenu", () => {
//     console.log("right mouse");
// })

let mouseShow = document.querySelector(".out")

document.querySelector("body").addEventListener("mousemove", (e) => {
    mouseShow.innerHTML = `X = ${e.screenX} Y = ${e.screenY}`;
})