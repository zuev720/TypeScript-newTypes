export default class Cart {
  protected _repository: object[];

  constructor() {
    this._repository = [];
  }

  add(value: object): void {
    this._repository.push(value);
  }

  get repository() {
    return this._repository;
  }
}
