function loadBooks() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var books = this.responseText;
      var booksObj = JSON.parse(books);
      for (x = 0; x < booksObj.books.length; x++)
      {
        showBooks(booksObj, x);
      }
    }
  };
  xhttp.open("GET", "books.json", true);
  xhttp.send();
}
function showBooks(booksObj, i) {
  var book = bookObj.books[i];
  var titleID = "book" + i + "Title";
  var summaryID = "book" + i + "Summary";
  var coverID = "book" + i + "Cover";
  document.getElementById(titleID).innerHTML = book.title;
  document.getElementById(summaryID).innerHTML = book.summary;
  document.getElementById(coverID).src = book.coverImage;
}
