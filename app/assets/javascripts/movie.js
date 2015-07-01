function acquireMovies() {
  var url = 'http://www.omdbapi.com/?s='
  var movieValue = document.getElementById("enterMovie").value
  $.getJSON(url + movieValue + '*', function (data) {
    var movieArray = data['Search'];
    var availableMovies = [];

    if (movieArray.length > 0) {
      movieArray.forEach(function(movie) {
        availableMovies.push(movie['Title'] + ' (' + movie['Year'] + ')');
      });

      $("#enterMovie").autocomplete({
        source: availableMovies
      });
    });
  }
}