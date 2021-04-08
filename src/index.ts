import Movie from "./classes/Movie";
import Cart from "./classes/Cart";

const cart = new Cart();
console.log(cart.repository.length)
const movie = new Movie();
movie.addToCart();
console.log(movie.repository);
