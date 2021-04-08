import Cart from "../classes/Cart";

it('Экземпляр класса должен создаваться', () => {
  const cart = new Cart();
  expect(cart.repository.length).toBe(0);
});
