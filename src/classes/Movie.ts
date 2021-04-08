import Buyable from "../intarfaces/Buyable";
import Cart from "./Cart";
import film from "../base/film";

export default class Movie extends Cart implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly translateName: string;
  readonly image: string;
  readonly year: number;
  readonly slogan: string;
  readonly country: string;
  readonly ganre: string[];
  readonly time: string[];

  constructor() {
    super();
    this.id = film.id;
    this.name = film.name;
    this.translateName = film.translateName;
    this.image = film.image;
    this.year = film.year;
    this.slogan = film.slogan;
    this.country = film.country;
    this.ganre = film.ganre;
    this.time = film.time;
  }

  showMovie(): object {
    return {
      id: this.id,
      image: this.image,
      name: this.name,
      translateName: this.translateName,
      year: this.year,
      country: this.country,
      slogan: this.slogan,
      ganre: this.ganre,
      time: this.time,
    };
  }

  addToCart(): void {
    this.add(this.showMovie());
  }
}
