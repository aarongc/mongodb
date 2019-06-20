"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.default.connect(uri, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully Connected!");
    }
});
exports.BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.default.model("Book", exports.BookSchema);
exports.default = Book;
