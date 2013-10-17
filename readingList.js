var BookList = function(bookList, startingBook) {
    this.booksRead = function(){
        var counter = 0;
        for(var i = 0; i < this.bookShelf.length; i++) {
            if(this.bookShelf[i].read === true){
                counter++;
            }
        }
        return counter;
    };
    this.booksNotRead = function(){
        var counter = 0;
        for(var i = 0; i < this.bookShelf.length; i++) {
            if(this.bookShelf[i].read === false){
                counter++;
            }
        }
        return counter;
    };
    

    this.add = function(book) {
        this.bookShelf.push(book);
    };

    this.finishCurrentBook = function(){
        this.lastBook = this.currentBook;
        this.add(this.currentBook);
        this.currentBook.date = Date.now();
        this.currentBook.read = true;
        this.currentBook = this.nextBook;
        this.nextBook = this.getNextBook();

    };
    this.getNextBook = function() {
        for (var i = 0; i < this.bookShelf.length; i++){
            console.log(this);
            if (this.bookShelf[i].read === false){
                return this.bookShelf[i];

            }

        }
        console.log("You've read all the books!");
    
    };

    
    this.currentBook = startingBook;
    this.lastBook = startingBook;
    this.bookShelf = bookList || [];
    this.nextBook = this.getNextBook();


};



var Book = function(title, genre, author) {
    this.bookTitle = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.date = "";
};


var pnp = new Book("Pride and Prejudice", "Classic", "Austen");
var sns = new Book("Sense and Sensibility", "Classic", "Austen");
var mp = new Book ("Mansfield Park", "Classic", "Austen");
var na = new Book ("Northanger Abbey", "Classic", "Austen");

var booklist = new BookList([na, sns, mp], pnp);

console.log(booklist.bookShelf);