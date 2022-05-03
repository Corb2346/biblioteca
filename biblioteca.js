let myLibrary = []; //arreglo que almacenará los libros
let indexArray = 0; // variable que recorre el arreglo al agregar o quitar libros
let newBook="";

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

function createInfoCard(){

  const newCardBook= document.createElement("newCardBook");//crea el contenedor  //da estilos a el contenedor donde se muestra la info
  newCardBook.classList.add("bookCard");
  /*newCardBook.style.backgroundColor = "#d2d2d2";
  newCardBook.style.borderRadius ="25px";
  newCardBook.style.height = "350px";
  newCardBook.style.width = "275px";
  newCardBook.display = "flex";
  newCardBook.flexwrap= "wrap";
  newCardBook.style.flexDirection = "column";
  newCardBook.style.alignItems ="center";
  newCardBook.style.fontFamily = "Anek Gurmukhi sans-serif";
  newCardBook.style.fontSize = "30px";
  newCardBook.style.gap ="15px";
  newCardBook.style.paddingTop = "25px";
  newCardBook.style.textAlign ="center";
  newCardBook.style.boxShadow ="5px 5px #5a5a5a82";  */

  const InputTitleBook =document.createElement("TitleBook"); // se crean los divs dentro de la tarjeta
  const InputAuthorBook = document.createElement("AuthorBook");
  const InputNumberPages = document.createElement("PagesBook");
  const InputStatus = document.createElement("Status");
  const UpdateStatus = document.createElement("updateStatus");
  const Delete = document.createElement("BUTTON");
  const TextButton = document.createTextNode("Delete");
  newCardBook.appendChild(InputTitleBook);
  newCardBook.appendChild(InputAuthorBook);
  newCardBook.appendChild(InputNumberPages);
  newCardBook.appendChild(InputStatus);
  newCardBook.appendChild(UpdateStatus);
  Delete.appendChild(TextButton);//se añaden divs y botones 
  newCardBook.appendChild(Delete); 
  bookContainer.appendChild(newCardBook);

  //clase a divs para dar estilo

  InputTitleBook.textContent = 'TitleBook';
  InputTitleBook.classList.add('diplayInfo');

  InputAuthorBook.textContent = 'AuthorBook';
  InputAuthorBook.classList.add('diplayInfo');

  InputNumberPages.textContent = 'NumberPages';
  InputNumberPages.classList.add('diplayInfo');

  InputStatus.textContent = 'Read IT';
  InputStatus.classList.add('diplayInfo');

  UpdateStatus.textContent = 'UpdateSatus';
  UpdateStatus.classList.add('diplayInfo');

  Delete.textContent = 'Delete';
  Delete.classList.add('delete');


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
            createInfoCard();
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
        
        myLibrary[indexArray] = bookNew;
        console.log(myLibrary[indexArray]);

}   

/*let bookNew = addBookToLibrary("TheHobbit","Tolkien",300,"yes");

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
console.log(contador);*/