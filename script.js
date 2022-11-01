//The start of the function to sort in ascending row.
function sortTitleAsc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  // Getting the element id from movies table 
  table = document.getElementById('table-movies');
  switching = true;
  //The start of while loop
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      //initializing x and y with the title of the movie
      x = rows[i].getElementsByClassName("title")[0];
      y = rows[i + 1].getElementsByClassName("title")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
//The start of the function to sort in descending row
function sortTitleDesc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  // Getting the element id from movies table 
  table = document.getElementById('table-movies');
  switching = true;
  //The start of while loop
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      //initializing x and y with the title of the movie
      x = rows[i].getElementsByClassName("title")[0];
      y = rows[i + 1].getElementsByClassName("title")[0];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
//The start of the function to sort in ascending row.
function sortRatingAsc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  // Getting the element id from movies table 
  table = document.getElementById('table-movies');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      //initializing x and y with the rate of the movie
      x = rows[i].getElementsByClassName("rating")[0];
      y = rows[i + 1].getElementsByClassName("rating")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
//The start of the function to sort in descending row
function sortRatingDesc() {
  var table, rows, switching, i, x, y, shouldSwitch;
  // Getting the element id from movies table 
  table = document.getElementById('table-movies');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      //initializing x and y with the rate of the movie
      x = rows[i].getElementsByClassName("rating")[0];
      y = rows[i + 1].getElementsByClassName("rating")[0];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

$(function () {
  // the add movie function button
  $('#addMovie').click(function () {
    var title = $('#movieTitle').val();
    var rating = $('#movieRating').val();
    if (rating > 10) {
      alert('The Rating can not be higher than 10');
      $('#movieRating').val("");
    } else if (rating < 1) {
      alert('The Rating can not be lower than 1');
      $('#movieRating').val("");
    } else {
      $('#table-movies').append('<tr><td class="title"><input type="text" class="disabled" value="' + title + '"/></td><td class="rating"><input type="text" class="disabled" value="' + rating + '"/></td><td><button type="button" class="delete-movie">Delete</button></tr>')
      $('#movieTitle').val("");
      $('#movieRating').val("");
    }
  });
  $('#table-movies').on('click', '.delete-movie', function () {
    $(this).closest('tr').remove();
  });
  // the edit movie function button
  $('#editMovie').on('click', function () {
    $(this).toggleClass('edit-movie-active');
    $('#table-movies input').toggleClass('disabled');
  });
  //the callback functions
  $('.ascTitle').click(function () {
    sortTitleAsc();
  });
  $('.descTitle').click(function () {
    sortTitleDesc();
  });
  $('.ascRating').click(function () {
    sortRatingAsc();
  });
  $('.descRating').click(function () {
    sortRatingDesc();
  });
});