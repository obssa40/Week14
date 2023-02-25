let movies = [

  {
    id: 0,
    title: "The Godfather",
    release_date: "1972-03-14",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    rating: 5,
    reviews: [
      {
        id: 0,
        review: "This movie was great",
      },
      {
        id: 1,
        review: "I really enjoyed the movie",
      },
      {
        id: 2,
        review: "Nice movie!",
      },
    ],
  },

];


export function addReview(movieId, review) {
  const movieIndex = movies.findIndex((movie) => movie.id === movieId);
  if (movieIndex !== -1) {
    movies[movieIndex].reviews.push(review);
    console.log("review added")
  }
}

export function getReviews(movieName){
  const movieIndex = movies.findIndex((movie) => movie.title === movieName);
  if (movieIndex !== -1) {
    return movies[movieIndex].reviews;
  }
}

export default movies;
