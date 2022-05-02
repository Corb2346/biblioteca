let myLibrary = []; //arreglo que almacenará los libros
let contador=0; // variable que recorre el arreglo al agregar o quitar libros

let inputInfoBook = document.getElementById("inputInfoBook"); //muestra el formulario para añadir libros
let bookCard = document.getElementById("bookCard"); // muestra una tabla con la informacion introducida

let inputTitleBook = document.getElementById("inputTitleBook");//div donde se mete la info
let inputAuthorBook = document.getElementById("inputAuthorBook");//div donde se mete la info
let inputnumberPagesBook = document.getElementById("inputnumberPagesBook");//div donde se mete la info
let addButtonOverlay = document.querySelector("#addButtonOverlay");

let titleBook = document.getElementById("titleBook");//text area donde se muestra la informacion del titulo ingresado por usuario
let authorBook = document.getElementById("authorBook");//text area donde se muestra la informacion del autor ingresado por usuario
let numberPagesBook = document.getElementById("numberPagesBook");//text area donde se muestra la informacion del numero de paginas ingresado por usuario
let checkBox = document.getElementById("checkBox");//llama al checkbox 
let status = document.getElementById("status");

addButtonOverlay.addEventListener('click',addData);

function on() {//crea un overlay y muestra el formulario para crear un libro
    document.getElementById("overlay").style.display = "block";
    inputInfoBook.style.display = "block";
  }
  
  function off() { //valida la informacion si los campos son vacios manda mensajes que la inf es requerida
    if(inputTitleBook.value === "" || inputTitleBook.value === null && inputAuthorBook.value === "" || inputAuthorBook.value === null && inputnumberPagesBook.value === 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " " ){

      inputTitleBook.placeholder = "Title requiered";
      inputAuthorBook.placeholder = "Author requiered";
      inputnumberPagesBook.placeholder = "Insert number of Pages ";

    } else if(inputAuthorBook.value === "" || inputAuthorBook.value === null && inputnumberPagesBook.value <= 0 || inputnumberPagesBook.value === null ||     inputnumberPagesBook.value === " "){

      inputAuthorBook.placeholder = "Author requiered"
      inputnumberPagesBook.placeholder = "Insert number of Pages  ";

    } else if(inputnumberPagesBook.value <= 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " " ){

      inputnumberPagesBook.placeholder = "Insert number of Pages";
    } else {document.getElementById("overlay").style.display = "none";//si no faltan campos por llenar quita el display y el formulario
    bookCard.style.display = "flex";
    }
  }

  function addData(){//captura los datos introducidos en los input del html
    let readStatus ="";

    if(checkBox.checked == true){
      readStatus = "yes";
    } else {
      readStatus = "no"
    }

    let titleBook = inputTitleBook.value;
    console.log(titleBook);
    let authorBook = inputAuthorBook.value;
    console.log(authorBook);
    let pagesBook = inputnumberPagesBook.value;
    console.log(pagesBook);
    
    console.log(readStatus);
    let newBook = addBookToLibrary(titleBook,authorBook,pagesBook,readStatus);
    console.log(newBook);

    
    return newBook;
    
  }


  function book(title,author,numberPages,read){ //objeto libro que crea libros al introducir los valores
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;

    this.info = function (){
        console.log(" " + this.title+ " " + this.author +" " + this.numberPages +" " + this.read );
    }
}

function addBookToLibrary(title,author,numberPages,read) { // funcion que recibe info del html y lo va a pasar a la funcion book
  
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;

    const bookNew = new book(this.title, this.author , this.numberPages ,this.read );

        titleBook.textContent = bookNew.title;
        authorBook.textContent = bookNew.author;
        numberPagesBook.textContent = bookNew.numberPages;
        if(this.read === "yes"){
          status.textContent = "read it";
          status.style.backgroundColor = "#5FFF7A";
        } else {
          status.textContent = "No read It";
          status.style.backgroundColor = "#FF4949";
        }
        

        return bookNew;
}   

let bookNew = addBookToLibrary("TheHobbit","Tolkien",300,"yes");

console.log(bookNew.title);
console.log(bookNew.author);
console.log(bookNew.numberPages);
console.log(bookNew.read);

bookNew.info();

myLibrary[contador] = bookNew;



console.log(contador);

console.log(myLibrary[contador]);
contador++;

bookNew = addBookToLibrary("GameOfThrones","Martin",500,"No");

 console.log(bookNew.title);
console.log(bookNew.author);
console.log(bookNew.numberPages);
console.log(bookNew.read);

bookNew.info();

myLibrary[contador] = bookNew;

console.log(myLibrary[contador]);

contador++;
console.log(contador);