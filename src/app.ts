import * as bookController from "./controllers/book-controller";
let express = require("express");
let app = express();

app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", bookController.allBooks);
app.get("/:id", bookController.getBook);
app.post("/", bookController.addBook);
app.put("/{id}", bookController.updateBook);
app.delete("/{id}", bookController.deleteBook);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});