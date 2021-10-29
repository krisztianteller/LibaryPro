
function addBook() {
    
    let newBook = document.createElement("DIV");
    let title = document.createElement("INPUT");
    let author = document.createElement("INPUT");
    let pages = document.createElement("INPUT");
    author.setAttribute("type", "text");
    pages.setAttribute("type", "text");
    title.setAttribute("type", "text");
    title.value = "Title";
    author.value = "Author"
    pages.value = "Pages"
    document.body.appendChild(newBook);
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
}
