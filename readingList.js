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
                var exists = false;
                for(var i = 0; i < this.bookShelf.length; i++){
                    if (book.bookTitle === this.bookShelf[i].bookTitle) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    this.bookShelf.push(book);
                }
            };

            this.finishCurrentBook = function(){
                this.lastBook = this.currentBook;
                this.add(this.currentBook);
                this.currentBook.date = Date.now();
                this.currentBook.read = true;
                this.currentBook = this.nextBook;
                this.nextBook = this.getNextBook();
                this.booksRead++;
                this.booksNotRead--;

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



        var Book = function(title, genre, author, img) {
            this.bookTitle = title;
            this.genre = genre;
            this.author = author;
            this.read = false;
            this.date = "";
            this.img = img;
        };


        var pnp = new Book("Pride and Prejudice", "Classic", "Austen", "http://www.benpentreath.com/shop/images/uploads/Penguin%20Clothbound%20Classics/clothboundclassics(10).jpeg");
        var sns = new Book("Sense and Sensibility", "Classic", "Austen","http://www.benpentreath.com/shop/images/uploads/BOOKS/Sense-and-Sensibility.jpg");
        var mp = new Book ("Mansfield Park", "Classic", "Austen", "http://www.penguin.co.uk/static/cs/uk/0/pubsetpages/clothboundclassics/images/big/mansfield_park_H.jpg");
        var na = new Book ("Northanger Abbey", "Classic", "Austen", "http://www.penguin.co.uk/static/cs/uk/0/pubsetpages/clothboundclassics/images/big/northanger_abbey_H.jpg");

        var booklist = new BookList([na, sns, mp], pnp);

        na.read = true;

        var body = document.getElementsByTagName('body')[0];
        

        for (var i = 0; i < booklist.bookShelf.length; i++){
            var author = booklist.bookShelf[i].author;
            var title = booklist.bookShelf[i].bookTitle;
            var cover = booklist.bookShelf[i].img;

            var div = document.createElement('div');
            div.setAttribute('class', 'book');
            var newList = document.createElement('ul');



            var authorListItem = document.createElement('li');
            var titleListItem = document.createElement('li');

            var authorText = document.createTextNode('Author: '+ author);
            var titleText = document.createTextNode('Title: '+ title);

            var newCover = document.createElement('img');
            newCover.src = cover;
            newCover.setAttribute('class', 'imageCover');

            if (booklist.bookShelf[i].read === true){
                newCover.style.opacity = '0.3';    
            }

        
            authorListItem.appendChild(authorText);
            titleListItem.appendChild(titleText);

            newList.appendChild(authorListItem);
            newList.appendChild(titleListItem);

            div.appendChild(newCover);
            div.appendChild(newList);
            body.appendChild(div);
            
        }

        