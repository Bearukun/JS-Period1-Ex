let http = require("http");

// Interfaces

//a
interface IBook{
    title: string;
    author: string;
    published: Date;
    pages: number;
}

//b
function readIBook(iBook: IBook): void{
    console.log("Title: " + iBook.title + ". Author: " + iBook.author + ". Published: " + iBook.published + ". Pages: " + iBook.pages);
}


var book = {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    published: new Date(2011,10,24),
    pages: 656
}

readIBook(book);

//c
//One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

//d
interface IBook2{
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}

var book2 = {
    title: "Harry Potter",
    author: "J. K. Rowling"
}

//b
function readIBookOptional(iBook: IBook2): void{
    console.log("Title: " + iBook.title + ". Author: " + iBook.author + ". Published: " + iBook.published + ". Pages: " + iBook.pages);
}

readIBookOptional(book);
readIBookOptional(book2);

//e - Read only
interface IBook3{
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

var book3: IBook3 = {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    published: new Date(2011,10,24),
    pages: 656
}

function readIBookReadOnly(iBook: IBook3): void{
    console.log("Title: " + iBook.title + ". Author: " + iBook.author + ". Published: " + iBook.published + ". Pages: " + iBook.pages);
}

readIBookReadOnly(book3);

//Works..!
//book3.author = "Rewrite";

readIBookReadOnly(book3);


//f - Create a Book class

class Book implements IBook2{



    constructor(public title: string, public author: string, public published: Date, public pages: number){
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }

    hello(){
        console.log(this.title + " added..!")
    }

}

var objectBook = new Book("Objects in Typescript", "Bear", new Date(2017,9,6), 1337);

objectBook.hello();

