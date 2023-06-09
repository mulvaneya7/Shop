import Controller from '@ember/controller';

export default class CartController extends Controller {
  //Using the reduce method to iterate over the model array
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return this.subtotal * 0.09;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
