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
function post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
post.prototype.edit = function() {
    console.log(this.author, this.text, this.date);
};
let a = new post(1 ,2, 5,);
a.edit();
let b = new post(2, 3, 5,);
b.edit();

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    
}
}
let a = new Post(1 ,2, 5,);
console.log(a);
let b = new Post(2, 9, 111,);
console.log(b);
