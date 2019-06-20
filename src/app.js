"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bookController = __importStar(require("./controllers/book-controller"));
var express = require("express");
var app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get("/", bookController.allBooks);
app.get("/:id", bookController.getBook);
app.post("/", bookController.addBook);
app.put("/{id}", bookController.updateBook);
app.delete("/{id}", bookController.deleteBook);
var server = app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
