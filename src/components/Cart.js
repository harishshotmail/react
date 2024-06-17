import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatchEvent = useDispatch()
  const handleClearCart = () => {
    dispatchEvent(clearCart());
  }
  return (
    <div className="w-6/12 m-auto text-center my-4 p-4">
      <h1 className="font-bold">Cart</h1>
      <button className="border rounded-sm bg-white text-black hover:bg-gray-100 font-bold px-5 py-1 m-2" onClick={() => handleClearCart()}>Clear Cart</button>
      <ItemList harish={items}></ItemList>
    </div>
  );
};

export default Cart;
