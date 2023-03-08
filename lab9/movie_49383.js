

$(document).ready(function () {
  $.ajax({
    url: "https://yts.mx/api/v2/movie_details.json?movie_id=49383",
    type: "GET",
    success: function (res) {
      console.log(res);
      $("main").append(
        `<div class="movie">
          <img src="${res.data.movie.medium_cover_image}" alt="${res.data.movie.title}">
          </div>
          <div class="movie-info">
          <h3>${res.data.movie.title}</h3>
          <p>${res.data.movie.year}</p>
          <p>${res.data.movie.description_full}</p>
          <p>${res.data.movie.genres}</p>
          <p>${res.data.movie.rating}</p>
          <p>${res.data.movie.runtime}</p>
          <p>${res.data.movie.language}</p>
          <p>${res.data.movie.mpa_rating}</p>
          </div>`
      );
    }
  });
});