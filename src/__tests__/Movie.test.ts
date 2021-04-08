import Movie from "../classes/Movie";

it('Экземпляр класса должен успешно добавлять фильм в корзину', () => {
  const movie = new Movie();
  movie.addToCart();
  expect(movie.repository).toEqual([
      {
        id: 1527,
        image: './src/base/images/avengers.jpg',
        name: 'Мстители',
        translateName: 'The Avengers',
        year: 2012,
        country: 'США',
        slogan: 'Avengers Assemble!',
        ganre: [ 'фантастика', 'боевик', 'приключения', 'фентези' ],
        time: [ './src/base/images/time.jpg', '137 мин/02:17' ]
      }
    ]
  )
});
