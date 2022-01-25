// 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по

//     аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
    
//     а) конструктор Post, который принимает параметры author, text, date и сохраняет
    
//     их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
    
//     принимать текст и записывать его в свойство text объекта.
    
//     б) конструктор AttachedPost, который принимает параметры author, text, date.
    
//     Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
    
//     дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
    
//     highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
    
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
    
//     который будет назначать свойству highlighted значение true.
'use strict';
1.1
function post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
post.prototype.edit = function(text) {
    this.text = text;
};
function AttachedPost(author, text, date){
    post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};
const attached1 = new AttachedPost('admin', 'lorem2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('hghghgh');
console.log(attached1);
1.2
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }

}
class AttachedPost extends Post {
    constructor(author,text,date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
    const attached1 = new AttachedPost('admin', 'lorem2', new Date());
    console.log(attached1);
    attached1.makeTextHighlighted();
    attached1.edit('hghghgh');
    console.log(attached1);



2.1

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price / 100 * 25);
    this.name = this.name + '  мой';

};
let Product1 = new Product('товар1', 100,);
let Product2 = new Product('товар2', 300,);
Product1.make25PercentDiscount();
Product2.make25PercentDiscount();
console.log(Product1);
console.log(Product2);
2.2
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
        this.name = this.name + '  мой';
    }
}
    let Product1 = new Product('товар1', 100,);
    let Product2 = new Product('товар2', 300,);
    Product1.make25PercentDiscount();
    Product2.make25PercentDiscount();
    console.log(Product1);
    console.log(Product2);