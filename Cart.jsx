export default function Cart({ cart, increase, decrease }) {
  return (
    <div className="cart">
      <h2> Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => decrease(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
