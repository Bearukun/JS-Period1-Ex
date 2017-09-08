"use strict";
var http = require("http");
//b
function readIBook(iBook) {
    console.log("Title: " + iBook.title + ". Author: " + iBook.author + ". Published: " + iBook.published + ". Pages: " + iBook.pages);
}
var book = {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    published: new Date(2011, 10, 24),
    pages: 656
};
readIBook(book);
var book2 = {
    title: "Harry Potter",
    author: "J. K. Rowling"
};
//b
function readIBookOptional(iBook) {
    console.log("Title: " + iBook.title + ". Author: " + iBook.author + ". Published: " + iBook.published + ". Pages: " + iBook.pages);
}
readIBookOptional(book);
readIBookOptional(book2);
var book3 = {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    published: new Date(2011, 10, 24),
    pages: 656
};
function readIBookReadOnly(iBook) {
    console.log("Title: " + iBook.title + ". Author: " + iBook.author + ". Published: " + iBook.published + ". Pages: " + iBook.pages);
}
readIBookReadOnly(book3);
//Works..!
//book3.author = "Rewrite";
readIBookReadOnly(book3);
//f - Create a Book class
var Book = /** @class */ (function () {
    function Book(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    Book.prototype.hello = function () {
        console.log(this.title + " added..!");
    };
    return Book;
}());
var objectBook = new Book("Objects in Typescript", "Bear", new Date(2017, 9, 6), 1337);
objectBook.hello();
