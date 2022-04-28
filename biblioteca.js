function book(title,author,numberPages,read){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;

    this.info = function (){
        console.log(" " + this.title+ " " + this.author +" " + this.numberPages +" " + this.read );
    }
}

const book1 = new book("TheHobbit", "J R R Tolkien", 300,"alreadyFinish" );
console.log(book1.title);
console.log(book1.author);
console.log(book1.numberPages);
console.log(book1.read);

book1.info();