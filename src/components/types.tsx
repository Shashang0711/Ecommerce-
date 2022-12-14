export interface cartState {
  // totalQty: any;
  cartItems: (undefined | cartItem)[];
  totalAmount: number;
  totalQuantity: number;
}
export interface cartItem {
  id: string;
  productName: string;
  imgUrl: string;
  quantity: number;
  price: number;
  totalPrice: number;
}
