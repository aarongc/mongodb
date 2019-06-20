"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = __importDefault(require("../book"));
exports.allBooks = function (req, res) {
    var books = book_1.default.find(function (err, books) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = function (req, res) {
    var book = book_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.deleteBook = function (req, res) {
    var book = book_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Book");
        }
    });
};
exports.updateBook = function (req, res) {
    console.log(req.body);
    var book = book_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated book!");
        }
    });
};
exports.addBook = function (req, res) {
    var book = new book_1.default(req.body);
    book.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
