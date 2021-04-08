type Film = {
  id: number,
  name: string,
  translateName: string,
  image: string,
  year: number,
  slogan: string,
  country: string,
  ganre: string[],
  time: string[],
}

const film: Film = {
  id: 1527,
  name: 'Мстители',
  translateName: 'The Avengers',
  image: './src/base/images/avengers.jpg',
  year: 2012,
  slogan: 'Avengers Assemble!',
  country: 'США',
  ganre: ['фантастика', 'боевик', 'приключения', 'фентези'],
  time: ['./src/base/images/time.jpg', '137 мин/02:17']
}

export default film;
